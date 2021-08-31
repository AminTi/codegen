import React, { useState } from "react";
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
import Button from "../components/Button";

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
    [theme.breakpoints.down("sm")]: {
      minWidth: "90vw",
    },
  },
}));

const CodeGen = () => {
  const [inputValue, setInputValue] = useState(15);
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <CodeResult />
      <Paper className={classes.box}>
        <Slider inputValue={inputValue} setInputValue={setInputValue} />

        {["UpperCase", "LowerCase", "Numbers", "Symbols"].map((item, index) => {
          return <CheckBox text={item} key={index} />;
        })}
      </Paper>
      <Button text={"Generate"} />
    </Container>
  );
};

export default CodeGen;
