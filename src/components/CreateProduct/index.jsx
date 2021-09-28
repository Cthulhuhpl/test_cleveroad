import React, { useContext, useState } from "react";
import {
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { Context } from "../../index";
import "./style.css";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { subDays } from "date-fns";


export default function CreateProduct({history}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [sale, setSale] = useState("");
  const [photo, setPhoto] = useState('')
  const [saleDay, setSaleDay] = useState("");
  const { firestore } = useContext(Context);
  const createProduct = async () => {
    try {
      const docRef = await addDoc(collection( firestore , "cards"), {
        name,
        description,
        price,
        sale,
        photo,
        saleDay: Math.round(((saleDay - Date.now())/(24*3600*1000)))

      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    history.push('/catalog');
    
  };
  const saleValidation = () => {
    if (sale < 10 || sale > 90) {
      return true;
    }
  };
  const priceValidation = () => {
    console.log(price);
    if (price < 0 || price > 99999999.99) {
      return true;
    }
  };
  const descValidation = () => {
    if (description.length > 200) {
      return true;
    }
  };
  const nameValidation = () => {
    if (name.length < 20 || name.length > 60) {
      return true;
    }
  };
  return (
    <div className="root">
      <form onSubmit={(e) => {
            e.preventDefault();
            createProduct();
          }}>
        <TextField
          required
          fullWidth
          label="Name"
          error={nameValidation()}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Description"
          error={descValidation()}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField required fullWidth label="Photo (URL)" onChange={e => setPhoto(e.target.value)} />
        <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
        <OutlinedInput
          fullWidth
          required
          id="outlined-adornment-amount"
          type="number"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          error={priceValidation()}
          onChange={(e) => setPrice(e.target.value)}
          label="Price"
        />

        <InputLabel htmlFor="outlined-adornment-amount">Discount</InputLabel>
        <OutlinedInput
          fullWidth
          id="outlined-adornment-amount"
          type="number"
          startAdornment={<InputAdornment position="start">%</InputAdornment>}
          error={saleValidation()}
          onChange={(e) => setSale(e.target.value)}
          label="Amount"
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Basic example"
          value={saleDay}
          minDate={subDays(new Date(), 0)}
          onChange={(newValue) => {
            setSaleDay(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}         
        />
      </LocalizationProvider>
        <Button type="submit">Create </Button>
      </form>
    </div>
  );
}
