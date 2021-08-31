import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import color from "../styles/color";

const useStyles = makeStyles({
  btn: {
    background: color.red,
    color: color.white,
    padding: "20px 60px",
    fontWeight: "bold",
    borderRadius: "10px",
  },
});

const Buttons = ({ text }) => {
  const classes = useStyles();
  return (
    <>
      <Button variant="contained" className={classes.btn}>
        {text}
      </Button>
    </>
  );
};

export default Buttons;
