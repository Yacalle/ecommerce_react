import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/UserSlice";
import { signInWithPopup } from "firebase/auth";
import { facebookProvider, googleProvider } from "../config/authMethods";
import auth from "../config/configFirabase";
import { makeStyles } from "@material-ui/core";

const Login = ({ log, setLog }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  /*handleLoginWithGoogle se encarga de manejar el login con Google
  y de actualizar la variable log a false para que se oculten el div con las opciones de iniciar sesion.
  */
  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setLog(false);
        return dispatch(login(res.user));
      })
      .catch((err) => {
        setLog(false);
        return window.alert("No se ha podido iniciar sesion");
      });
  };
  // handleLoginWithFacebook hace los mismo que handleLoginWithGoogle pero con facebook.
  //¡Se utiliza el 'window.alert' para informar al usuario del error por cuestiones de practicidad!
  const handleLoginWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((res) => {
        setLog(false);
        return dispatch(login(res.user));
      })
      .catch((err) => {
        setLog(false);
        return window.alert("No se ha podido iniciar sesion");
      });
  };
  return (
    <div className={`${classes.root} ${log && classes.displaymethodlog}`}>
      <span
        className={classes.googlelogin}
        onClick={() => handleLoginWithGoogle()}
      >
        Login with Google
      </span>
      <span
        className={classes.facebooklogin}
        onClick={() => handleLoginWithFacebook()}
      >
        Login with Facebook
      </span>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: ".5rem",
    position: "absolute",
    zIndex: 99999999,
    background: "rgba(233,233,233, 0.9)",
    borderRadius: ".2rem",
    top: 45,
    right: 10,
    transform: "translate(0, -200%)",
    transition: ".3s all",
    [theme.breakpoints.down("sm")]: {
      right: 10,
    },
    width: "40%",
    "& span": {
      padding: ".2rem",
      transition: ".5s all",
      borderRadius: ".2rem",
    },
  },
  googlelogin: {
    border: "1px solid #D13E33",
    color: "#D13E33",
    marginBottom: ".1rem",
    "&:hover": {
      cursor: "pointer",
      color: "#fff",
      background: "#D13E33",
    },
  },
  facebooklogin: {
    border: "1px solid #1877F2",
    color: "#1877F2",
    "&:hover": {
      cursor: "pointer",
      color: "#fff",
      background: "#1877F2",
    },
  },
  displaymethodlog: {
    transform: "translate(0, 0)",
  },
}));
export default Login;
