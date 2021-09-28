import React, { useState, useEffect, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Product from "./Product";
import { Context } from "../index";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const { firestore } = useContext(Context);
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(firestore, "cards"));
    const result = [];
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });
    setProducts(result);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Grid container spacing={1}>
      {products.map((product) => (
        <Grid key={product.id} item xs={3}>
          <Product product={product}  />
        </Grid> 
      ))}
      <Grid item xs={3}>
        <Card
          sx={{
            maxWidth: 245,
            height: 650,
            margin: "15px 5px",
            backgroundColor: "#d0f9ff",
          }}
        >
          <CardMedia
            style={{ margin: "10px", objectFit: "contain" }}
            component="img"
            height="140"
            image="https://snipstock.com/assets/cdn/png/f8ae7b8732fb4b39a99dad8c97fdc664.png"
            alt="create"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Add product
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" component={Link} to="/createProduct">
              Create
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Catalog;
