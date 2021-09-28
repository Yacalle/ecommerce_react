import { makeStyles } from "@material-ui/core";
import React from "react";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SignIn from "./components/SignIn";
import OrderUser from "./components/OrderUser";
import { useState, useEffect } from "react";
function App() {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [sizeWidt, setSizeWidth] = useState();
  //Utilizamos un addEventListener para saber cuál es el ancho de la ventana del navegador
  window.addEventListener("resize", function funtionResize() {
    let widthBrowser = window.outerWidth;
    setSizeWidth(widthBrowser);
  });
  useEffect(() => {
    if (sizeWidt > 959.95) {
      setShow(false);
    }
  }, [sizeWidt]);
  const handleShow = () => {
    if (sizeWidt <= 959.95) {
      if (show) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
  };
  return (
    <div className={classes.root}>
      <Navbar sizeWidt={sizeWidt} show={show} setShow={setShow} />
      <div className={classes.section1}>
        <header>
          <div className={classes.containerbanner}>
            <Banner />
          </div>
        </header>
        <main>
          <div className={classes.sectionproduct}>
            <Categories />
            <Products />
          </div>
        </main>
      </div>
      <div className={`${classes.section2} ${show && classes.displayshow}`}>
        <div className={classes.signin}>
          <SignIn show={show} setShow={setShow} />
        </div>
        <OrderUser />
        <div
          onClick={() => handleShow()}
          className={`${show && classes.cap}`}
        ></div>
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "0",
    },
  },
  section1: {
    width: "70%",
    borderRight: "1px solid #eee",
    minHeight: "100vh",
    padding: "0 1rem 1rem 1rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      border: "none",
    },
  },
  containerbanner: {
    marginTop: "5rem",
  },
  sectionproduct: {
    width: "100%",
  },
  section2: {
    width: "30%",
    minHeight: "100vh",
    position: "fixed",

    right: 0,
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      top: 48,
      width: "100%",
      minHeight: "100vh",
      transform: "translate(-100%, 0)",
    },
  },
  signin: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  displayshow: {
    transform: "translate(0, 0)",
    left: 0,
  },
  cap: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(0,0,0,0.5)",
  },
}));
export default App;
