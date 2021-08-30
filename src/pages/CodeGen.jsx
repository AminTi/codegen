import React from "react";
import BtmBar from "../components/BtmBar";
import Wrapper from "../components/Wrapper";
import Slider from "../components/Slider";
import CheckBox from "../components/CheckBox";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CodeResult from "../components/CodeResult";
import color from "../styles/color";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: " center",
    flexDirection: "column",
    background: color.ofwhite,
  },
  box: {
    minWidth: "50vw",
    margin: "5%",
    background: color.white,
  },
}));

const CodeGen = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <CodeResult />
      <Paper className={classes.box}>
        <Slider />

        {["UpperCase", "LowerCase", "Numbers", "Symbols"].map((item, index) => {
          return <CheckBox text={item} key={index} />;
        })}
      </Paper>
    </Container>
  );
};

export default CodeGen;
