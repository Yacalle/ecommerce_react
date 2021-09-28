import { makeStyles } from "@material-ui/core";
import categories from "../means/categories.json";
import CardCategory from "./CardCategory";
import WatchIcon from "./WatchIcon";
import ArrowDownIcon from "./ArrowDownIcon";
import HamburgerIcon from "./HamburgerIcon";
const Categories = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <span className={classes.titleicon}>
          <h2>Restaurants</h2>
          {<HamburgerIcon width="2rem" color="orange" />}
        </span>
        <div>
          <span>{<WatchIcon width=".8rem" color="#ffff" />}</span>
          <p>Delivery: Now</p>
          <span className={classes.arrowdownicon}>
            {<ArrowDownIcon width=".8rem" height=".8rem" color="#ffff" />}
          </span>
        </div>
      </div>
      <div className={classes.cards}>
        {categories?.map(({ icon, name, id }, index) =>
          index === 0 ? (
            <CardCategory key={id} icon={icon} title={name} />
          ) : (
            <CardCategory key={id} icon={icon} title={name} marginLeft />
          )
        )}
        <span className={classes.arrow}>
          <ArrowDownIcon color="#000" width="1.1rem" />
        </span>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    "& div": {
      background: "#FD4412",
      width: "10rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "2.5rem",
      color: "#fff",
      borderRadius: "2rem",
      [theme.breakpoints.down("sm")]: {
        marginTop: ".5rem",
      },
    },
    "& p": {
      margin: "0 .8rem 0 .4rem",
    },
  },
  titleicon: {
    display: "flex",
    "& h2": {
      marginRight: ".8rem",
    },
  },
  arrowdownicon: {
    transform: "rotate(90deg)",
    "&:hover": {
      cursor: "pointer",
    },
  },
  cards: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: ".8rem",
      paddingRight: ".8rem",
      overflowY: "hidden",
      overflowX: "scroll",
      scrollSnapType: "x",
      "&::-webkit-scrollbar": {
        background: "#fff",
        height: ".6rem",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "rgba(0,0,0,.5)",
        borderRadius: ".5rem",
      },
    },
  },
  arrow: {
    position: "absolute",
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#eee",
    width: "2rem",
    height: "2rem",
    borderRadius: ".4rem",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
export default Categories;
