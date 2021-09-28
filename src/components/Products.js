import { makeStyles } from "@material-ui/core";
import React from "react";
import CardProduct from "./CardProduct";
import products from "../means/products.json";
const Products = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {products?.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
}));
export default Products;
