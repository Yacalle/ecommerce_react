import { makeStyles } from "@material-ui/core";
import UserIcon from "./UserIcon";
import { useSelector } from "react-redux";
import { selectProduct } from "../features/ProductSlice";
import { useState, useEffect } from "react";
import { selectUser } from "../features/UserSlice";
import { signOut } from "firebase/auth";
import auth from "../config/configFirabase";
import { logout } from "../features/UserSlice";
import { useDispatch } from "react-redux";
import Login from "./Login";
const SignIn = ({ sizeWidt, show, setShow }) => {
  const classes = useStyles();
  const [user, setUser] = useState(false);
  const [log, setLog] = useState(false);
  const dispatch = useDispatch();
  let changeStateUser = useSelector(selectUser);
  let counter = useSelector(selectProduct);
  /*En este useEffect se maneja la actualizacion de la variable user. Y dependiendo de si esta existe o no, se mostrará el span de login o log out*/
  useEffect(() => {
    setUser(changeStateUser);
  }, [changeStateUser]);
  /* handleShow es la que maneja el contenedor que contiene los productos del carrito. Esta hará verdadera o falsa la variable 'show' que es la que permite que el contenedor se muestre o no. Esta función solo actualizará la variable show siempre y cuando el sizeWidth sea menor o igual a 959.95 */
  const handleShow = () => {
    if (sizeWidt <= 959.95) {
      if (show) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
  };
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        return dispatch(logout(null));
      })
      .catch((err) => console.log(err));
  };
  const handleLogin = () => {
    if (log) {
      setLog(false);
    } else {
      setLog(true);
    }
    return;
  };
  return (
    <div className={classes.root}>
      <div className={classes.carr}>
        <span>
          <UserIcon width="1.1rem" />
          {user ? (
            <span className={classes.logout} onClick={() => handleLogOut()}>
              Log Out
            </span>
          ) : (
            <span className={classes.login} onClick={() => handleLogin()}>
              Login
            </span>
          )}{" "}
        </span>
        <div onClick={() => handleShow()} className={classes.counter}>
          <p>{counter?.length}</p>
        </div>
      </div>
      <Login log={log} setLog={setLog} />
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "90%",
    paddingTop: ".5rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0",
    },
  },
  carr: {
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: ".4rem",
    "& span": {
      display: "flex",
    },
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      right: 10,
    },
  },
  counter: {
    background: "#FCD661",
    padding: ".5rem",
    width: "1.8rem",
    height: "1.8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ".4rem",
    marginLeft: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  logout: {
    border: ".5px solid #eee",
    marginLeft: ".5rem",
    padding: "0 .2rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  login: {
    border: ".5px solid #eee",
    marginLeft: ".5rem",
    padding: "0 .2rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
export default SignIn;
