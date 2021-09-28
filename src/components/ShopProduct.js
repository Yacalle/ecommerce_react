import { makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectProduct } from "../features/ProductSlice";
import { useDispatch } from "react-redux";
import { setProduct } from "../features/ProductSlice";
const ShopProduct = ({ product }) => {
  const classes = useStyles();
  let products = useSelector(selectProduct);
  const dispatch = useDispatch();
  // addQuantity se encarga de la lógica de ir sumando de uno en uno a la propiedad quantity de un determinando producto
  const addQuantity = (product) => {
    let addQuantityProduct = products?.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch(setProduct(addQuantityProduct));
  };
  // subtractQuantity hace lo inverso a addQuantity
  const subtractQuantity = (product) => {
    let subtractQuantityProduct;
    products?.map((item) => {
      if (item.id === product.id) {
        if (item.quantity - 1 === 0) {
          subtractQuantityProduct = products.filter(
            (ele) => ele.id !== item.id
          );
        } else {
          subtractQuantityProduct = products?.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }
      }
    });

    dispatch(setProduct(subtractQuantityProduct));
  };
  return (
    <div className={classes.root}>
      <div className={classes.infoimage}>
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${product.image})`,
          }}
        ></div>
        <div>
          <span>{product.quantity}</span>
          <span>x</span>
          <span>{product.name}</span>
          <div>
            <span
              onClick={() => subtractQuantity(product)}
              className={classes.buttons}
            >
              -
            </span>
            <span
              onClick={() => addQuantity(product)}
              className={classes.buttons}
            >
              +
            </span>
          </div>
        </div>
      </div>

      <div>${` ${product.quantity * product.price} `}</div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginTop: "1rem",
    height: "4rem",
    fontSize: ".8rem",
  },
  infoimage: {
    width: "90%",
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: "3rem",
    height: "2rem",
    margin: ".2rem .3rem",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    backgroundSize: "cover",
    borderRadius: ".3rem",
  },
  buttons: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "2rem",
    height: "1rem",
    background: "tomato",
    marginRight: ".3rem",
    borderRadius: ".2rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
export default ShopProduct;
