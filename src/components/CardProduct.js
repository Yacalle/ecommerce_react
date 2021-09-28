import { makeStyles } from "@material-ui/core";
import React from "react";
import StarIcon from "./StarIcon";
import { useSelector } from "react-redux";
import { selectProduct } from "../features/ProductSlice";
import { useDispatch } from "react-redux";
import { setProduct } from "../features/ProductSlice";
const CardProduct = ({ product }) => {
  const classes = useStyles();
  let products = useSelector(selectProduct);
  const dispatch = useDispatch();
  /* handleClick  se encarga de verificar si el producto clickeado existe o no en el store. Si no existe lo envia y si existe aumenta su propiedad quantity en 1*/
  const handleClick = (product) => {
    let itemInCarr = products?.find((ele) => ele.id === product.id);
    if (!itemInCarr) {
      dispatch(setProduct([...products, { ...product, quantity: 1 }]));
    } else {
      let updateProduct = products.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      dispatch(setProduct(updateProduct));
    }
  };
  return (
    <div className={classes.root}>
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${product.image})`,
        }}
      >
        <span>{product.time}</span>
      </div>
      <h3>{product.name}</h3>
      <div className={classes.score}>
        <span>{<StarIcon width="1rem" />}</span>
        <span>{product.qualification}</span>
        <span onClick={() => handleClick(product)} className={classes.carr}>
          Add to cart
        </span>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
    marginRight: "1rem",
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginRight: "0",
    },
  },
  image: {
    width: "100%",
    height: "10rem",
    position: "relative",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    backgroundSize: "cover",
    borderRadius: "1rem",
    [theme.breakpoints.down("sm")]: {
      height: "12rem",
    },
    "& span": {
      position: "absolute",
      background: "#eee",
      border: "none",
      height: "1.5rem",
      bottom: 0,
      left: 0,
      width: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderBottomLeftRadius: "1rem",
      borderTopRightRadius: "1rem",
    },
  },
  score: {
    paddingTop: "1rem",
    "& span": {
      marginRight: ".5rem",
    },
  },
  carr: {
    background: "tomato",
    color: "#fff",
    marginLeft: "1rem",
    padding: ".2rem",
    borderRadius: ".3rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
export default CardProduct;
