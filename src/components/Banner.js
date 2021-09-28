import { makeStyles } from "@material-ui/core";
import headerImage from "../assets/images/headerimage.png";
import cone from "../assets/images/d.png";
import Arrow from "./Arrow";
const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.containermainheader}>
        <div className={classes.imgheader}>
          <img src={headerImage} alt="header_image" />
        </div>
        <div className={classes.textheader}>
          <h2>
            $0 delivery for 30 days! <img src={cone} alt="cone" />
          </h2>
          <p>$0 delivery fee for orders over $10 for 30 days</p>
        </div>
        <div className={classes.button}>
          <div>
            <p>Learn more </p>
            <span>
              {
                <Arrow
                  color="#F69872"
                  width="1rem"
                  height="1rem"
                  stroke="20px"
                />
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "2.5rem 0",
  },
  //Estilos css de la clase containermainheader
  containermainheader: {
    display: "flex",
    background: "#FEF7EC",
    minHeight: "9.5rem",
    position: "relative",
    borderRadius: ".5rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  imgheader: {
    width: "15rem",
    height: "9.5rem",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "10.5rem",
    },
    "& img": {
      height: "10.5rem",
      width: "auto",
      position: "absolute",
      bottom: 0,
      left: 10,
      [theme.breakpoints.down("sm")]: {
        top: 0,
        right: 0,
        left: 0,
        margin: "auto",
      },
    },
  },
  textheader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "50%",
    margin: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      alignItems: "center",
    },
    "& h2": {
      fontSize: "1.6rem",
      color: "#F67647",
      "& img": {
        width: "20px",
      },
    },
    "& p": {
      fontSize: ".8rem",
      color: "#D1CAC1",
      fontWeight: "bold",
    },
  },
  button: {
    width: "20%",
    minHeight: "9.5rem",
    display: "flex",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      minHeight: "0",
      width: "100%",
      justifyContent: "center",
    },
    "& div": {
      display: "flex",
      marginBottom: "1.5rem",
      "&:hover": {
        cursor: "pointer",
      },
    },
    "& span": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: ".2rem",
    },
    "& p": {
      fontWeight: "bold",
      color: "#f69872",
      marginRight: ".5rem",
    },
  },
}));
export default Banner;
