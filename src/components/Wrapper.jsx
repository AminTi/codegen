import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import color from "../styles/color";
import BtmBar from "./BtmBar";
import NavBar from "./NavBar";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    minWidth: "100vw",
  },
});

const Wrapper = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <NavBar text={"CodeGen"} />
      {children}
      <BtmBar text={"React & Materail-UI By Amin Titi"} />
    </div>
  );
};

export default Wrapper;
