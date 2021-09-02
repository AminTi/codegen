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
  const classes = useStyles();
  const [inputValue, setInputValue] = useState(15);

  const [upperCase, setUppercase] = useState(false);
  const [lowerCase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [PassWordValue, setPassWordValue] = useState("");

  let alphabethArr = [];
  [...Array(122)].forEach((e, i) => {
    alphabethArr.push(String.fromCharCode(++i));
  });

  const AlphabethAndNumber = [];
  [...Array(20)].forEach((e, i) => {
    AlphabethAndNumber.push(++i);
  });

  const check = () => {
    if (upperCase && numbers && symbols == true) {
      let arr = alphabethArr.slice(31, 99).join("").toUpperCase();
      let newArr = [...arr, ...AlphabethAndNumber].sort(
        () => Math.random() - Math.random()
      );
      return newArr.join("");
    } else if (upperCase && numbers == true) {
      let arr = alphabethArr.slice(96, 122).join("").toUpperCase();
      let newArr = [...arr, ...AlphabethAndNumber].sort(
        () => Math.random() - Math.random()
      );
      return newArr.join("");
    } else if (numbers && symbols == true) {
      let arr = alphabethArr.slice(31, 99).join("").toLowerCase();
      let newArr = [...arr, ...AlphabethAndNumber].sort(
        () => Math.random() - Math.random()
      );
      return newArr.join("");
    } else if (symbols == true) {
      let arr = alphabethArr.slice(31, 99).join("").toLowerCase();
      let newArr = [...arr].sort(() => Math.random() - Math.random());
      return newArr.join("");
    } else if (numbers == true) {
      let arr = alphabethArr.slice(96, 122).join("");
      let newArr = [...arr, ...AlphabethAndNumber].sort(
        () => Math.random() - Math.random()
      );
      return newArr.join("");
    } else if (upperCase == true) {
      return alphabethArr.slice(96, 122).join("").toUpperCase();
    } else {
      return alphabethArr.slice(96, 122).join("");
    }
  };

  const generatePassword = () => {
    let retVal = "";
    let length = inputValue;
    let charset = check() && check();
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.random() * n);
    }
    return retVal;
  };

  const clickHandler = () => {
    setPassWordValue(generatePassword());
    console.log(PassWordValue);
  };

  const copyClick = () => {
    navigator.clipboard.writeText(PassWordValue);
  };

  return (
    <Container maxWidth="xl" className={classes.root}>
      <CodeResult
        PassWordValue={PassWordValue}
        clickHandler={clickHandler}
        copyClick={copyClick}
      />
      <Paper className={classes.box}>
        <Slider inputValue={inputValue} setInputValue={setInputValue} />
        <CheckBox
          text={"Uppercase"}
          check={upperCase}
          setCheck={setUppercase}
        />

        <CheckBox text={"Numbers"} check={numbers} setCheck={setNumbers} />
        <CheckBox text={"Symbols"} check={symbols} setCheck={setSymbols} />
      </Paper>
      <Button text={"Generate"} clickHandler={clickHandler} />
    </Container>
  );
};

export default CodeGen;
