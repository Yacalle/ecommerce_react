import { makeStyles } from "@material-ui/core";
import React from "react";

const CardCategory = ({ icon, title, marginLeft }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${marginLeft && classes.margintrue}`}>
      <div className={classes.containericon}>
        <img src={icon} alt="" />
      </div>
      <p>{title}</p>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: "80px",
    display: "inline",
    height: "9rem",
    boxShadow: "10px 10px 26px -12px rgba(0,0,0,0.25)",
    borderRadius: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: ".3s all",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#FCD661",
    },
    "& p": {
      marginTop: ".8rem",
      fontWeight: "bold",
    },
  },
  margintrue: {
    marginLeft: ".8rem",
  },
  containericon: {
    width: "3rem",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    border: "1px solid #eee",
    borderRadius: "50%",
    marginTop: ".7rem",
    "& img": {
      width: "1.5rem",
    },
  },
}));
export default CardCategory;
