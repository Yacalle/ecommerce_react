import { makeStyles } from "@material-ui/core";
import ShopProduct from "./ShopProduct";
import WatchIcon from "./WatchIcon";
import { useSelector } from "react-redux";
import { selectProduct } from "../features/ProductSlice";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProduct } from "../features/ProductSlice";
import Arrow from "./Arrow";
import emoji from "../assets/images/emoji.png";
const OrderUser = () => {
  const classes = useStyles();
  let products = useSelector(selectProduct);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const resetCarr = () => {
    dispatch(setProduct([]));
  };
  //En este useEffect se calcula el total a pagar
  useEffect(() => {
    const calcTotal = () => {
      let value = 0;
      if (products.length !== 0) {
        products.forEach((item) => (value += item.quantity * item.price));
        setTotal(value.toFixed(2));
      } else {
        setTotal(0);
      }
    };
    calcTotal();
  }, [products]);

  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <p
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          My{" "}
          <img
            style={{ width: "25px", paddingTop: ".5rem" }}
            src={emoji}
            alt=""
          />
        </p>
        <p>Order</p>
      </div>
      <div className={classes.carduser}>
        <div className={classes.userinfo}>
          <span>UserName</span>
          <span className={classes.colorgold}>Edit</span>
        </div>
        <div className={classes.time}>
          <div>
            <span className={classes.watch}>
              {<WatchIcon width=".8rem" color="#FCD661" />}
            </span>
            <span>time</span>
          </div>
          <span className={classes.colorgold}>choose time</span>
        </div>
      </div>
      <div className={classes.containershopproduct}>
        {products?.map((item) => (
          <ShopProduct key={item.id} product={item} />
        ))}
      </div>
      <div className={classes.totalvalue}>
        <p>Total:</p>
        <span>${` ${total}`}</span>
      </div>
      <div className={classes.checkout}>
        <div>
          <p>Persons</p>
          <div className={classes.counter}>
            <span>-</span>
            <span>0</span>
            <span>+</span>
          </div>
        </div>
        <div onClick={() => resetCarr()} className={classes.buttoncheckout}>
          <p>Checkout</p>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "1rem",
            }}
          >
            {<Arrow width="1rem" color="#000" />}
          </span>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 99999,
    background: "#fff",
    width: "90%",
    padding: ".5rem",
    maxHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      transform: "translate(-100, 0)",
    },
  },
  text: {
    marginTop: "4rem",
    "& p": {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
    },
  },
  carduser: {
    color: "#fff",
    background: "#503E9D",
    width: "100%",
    margin: "2rem 0",
    padding: "1.5rem",
    borderRadius: ".5rem",
  },
  userinfo: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
  },
  time: {
    display: "flex",
    justifyContent: "space-between",
  },
  watch: {
    padding: ".2rem .4rem",
    backgroundColor: "#614C97",
    borderRadius: ".3rem",
    marginRight: ".5rem",
  },
  colorgold: {
    color: "#FCD661",
  },
  containershopproduct: {
    overflowY: "auto",
    maxHeight: "10rem",
    "&::-webkit-scrollbar": {
      background: "#fff",
      width: ".5rem",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(0,0,0,.5)",
      borderRadius: ".5rem",
    },
  },
  totalvalue: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "3rem",
    borderBottom: "1px solid #eee",
    paddingBottom: ".5rem",
    "& span": {
      fontSize: "1.1rem",
      fontWeight: "bold",
    },
  },
  checkout: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1.5rem",
    "& div": {
      width: "50%",
    },
  },
  counter: {
    border: "1px solid #eee",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 .5rem",
    borderRadius: ".3rem",
    marginTop: ".5rem",
  },
  buttoncheckout: {
    background: "#FCD661",
    width: "70%",
    borderRadius: ".4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
export default OrderUser;
