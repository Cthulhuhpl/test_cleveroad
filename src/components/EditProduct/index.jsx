import React, { useContext, useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { subDays } from "date-fns";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { Context } from "../../index";

export default function EditProduct() {
  const { firestore } = useContext(Context);
  const [docData, setDocData] = useState({});

  const editProduct = async () => {
    const docRef = doc(firestore, "cards", "xvvTb6RshtdesLrMegOW");
    const docSnap = await getDoc(docRef);

    const unsub = onSnapshot(docRef, (doc) => {
        const data = docSnap.data();
        setDocData(data)
    });
    debugger;
  };
  editProduct();
  return (
    <div className="root">
        
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      > <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
        <TextField required fullWidth value={docData.name}/>
        <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
        <TextField fullWidth value={docData.description ? docData.description : ''}/>
        <InputLabel htmlFor="outlined-adornment-amount">Photo</InputLabel>
        <TextField required fullWidth value={docData.photo} />
        <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
        <OutlinedInput
          fullWidth
          required
          id="outlined-adornment-amount"
          type="number"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          value={docData.price}
        />

        <InputLabel htmlFor="outlined-adornment-amount">Discount</InputLabel>
        <OutlinedInput
          fullWidth
          id="outlined-adornment-amount"
          type="number"
          startAdornment={<InputAdornment position="start">%</InputAdornment>}
          value={docData.sale}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            minDate={subDays(new Date(), 0)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button type="submit">Edit </Button>
      </form>
    </div>
  );
}
