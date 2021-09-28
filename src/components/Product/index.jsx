import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./style.css";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Product = ({ product }) => (
  <Card
    sx={{
      maxwidth: 245,
      height: 650,
      margin: "15px 5px",
      backgroundColor: "#d0f9ff",
    }}
  >
<div className='edit'>
<Fab
      color="default"
      aria-label="edit"
      size="small"
      component={Link}
      to="/editProduct"
    >
      <EditIcon />
    </Fab>
</div>
    <CardMedia
      style={{ margin: "10px", objectFit: "contain" }}
      component="img"
      height="200"
      maxwidth="4000"
      image={product.photo}
      alt={product.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description ? product.description : null}
      </Typography>
      <Typography
        variant="h5"
        color={product.sale ? "red" : "black"}
        className={product.sale ? "line" : null}
      >
        {product.price + "$"}
      </Typography>
      <Typography variant="h4" color="text.secondary">
        {product.sale
          ? (product.price * (100 - product.sale)) / 100 + "$"
          : null}
        <Typography variant="body1" color="white" className="discountTyp">
          {product.sale ? product.sale + "%" : null}
        </Typography>
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {product.saleDay ? product.saleDay + " day left" : null}
      </Typography>
    </CardContent>
  </Card>
);

export default Product;
