import { makeStyles } from "@material-ui/core";
import React from "react";
import lens from "../assets/icons/126474.svg";
import SignIn from "./SignIn";
const Navbar = ({ sizeWidt, show, setShow }) => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <div style={{ display: "flex" }}>
        <div className={classes.hamburguermenu}>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={classes.logo}>
          <span>Chukwudi</span>
        </div>
      </div>

      <div className={classes.search}>
        <input type="search" name="search" placeholder="Search" />
      </div>
      <div className={classes.signin}>
        <SignIn sizeWidt={sizeWidt} show={show} setShow={setShow} />
      </div>
    </nav>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "69%",
    background: "#fff",
    position: "fixed",
    top: 0,
    zIndex: 999,
    padding: ".5rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column",
    },
  },
  hamburguermenu: {
    width: "auto",
    display: "flex",
    alignItems: "center",
    marginRight: "1rem",
    marginLeft: ".6rem",
    paddingTop: ".4rem",
    "& div": {
      width: "2rem",
    },
    "& div:hover": {
      cursor: "pointer",
    },
    "& span": {
      display: "block",
      width: "2rem",
      height: "3px",
      background: "#000",
      marginBottom: ".2rem",
    },
  },
  logo: {
    display: "flex",
    alignItems: "center",
    marginRight: ".5rem",
    "& span": {
      fontWeight: "bold",
    },
  },
  menumobile: {
    display: "flex",
    flexDirection: "column",
  },
  search: {
    width: "85%",
    [theme.breakpoints.down("sm")]: {
      order: "1",
      width: "100%",
      marginTop: ".5rem",
      padding: "0 .6rem",
    },
    "& input": {
      padding: "8px 40px",
      width: "100%",
      borderRadius: ".5rem",
      background: "#F8F8F8",
      backgroundImage: `url(${lens})`,
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "15px",
      backgroundPositionY: "center",
      backgroundSize: "12px",
      border: "none",
      "&:focus": {
        outline: "none",
      },
    },
  },
  signin: {
    display: "none",
    [theme.breakpoints?.down("sm")]: {
      display: "block",
    },
  },
}));
export default Navbar;
