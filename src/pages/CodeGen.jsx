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

  // const symbolsArr = ["!", "#", "€", "%", "&", "/", "=", "+", "?"];
  // let alphabethArr = [];

  // [...Array(122)].forEach((e, i) => {
  //   alphabethArr.push(String.fromCharCode(++i));
  // });

  // const AlphabethArr = alphabethArr
  //   .slice(96, 122)
  //   .sort(() => Math.random() - Math.random());

  // const uppercaseFuc = () => {
  //   let uppercaseFuc = [...AlphabethArr].splice(0, inputValue);
  //   return uppercaseFuc.join("").toString().toUpperCase();
  // };

  // const lowercaseFuc = () => {
  //   let uppercaseFuc = [...AlphabethArr].splice(0, inputValue);
  //   return uppercaseFuc.join("").toString().toLowerCase();
  // };

  // const symbolLowerCase = () => {
  //   let val = Math.floor(inputValue / 2);
  //   let arr = [...AlphabethArr].splice(0, val);
  //   let arr2 = [...symbolsArr].splice(0, val);
  //   let shuffel = arr2.sort(() => Math.random() - Math.random());
  //   let upper = arr2.map((item) => {
  //     return item.toUpperCase();
  //   });
  //   let newArr = [...upper, ...shuffel];
  //   return newArr.sort(() => Math.random() - Math.random());
  // };

  // const lowerAndupperCaseFuc = () => {
  //   let val = Math.floor(inputValue / 2);
  //   let arr = [...AlphabethArr].splice(0, val);
  //   let arr2 = [...AlphabethArr].splice(0, val);
  //   let upper = arr2.map((item) => {
  //     return item.toUpperCase();
  //   });
  //   let newArr = [...upper, ...arr];
  //   return newArr.sort(() => Math.random() - Math.random());
  // };

  // const numbersGenFunc = () => {
  //   let val = Math.floor(inputValue / 2);
  //   const newArr = lowerAndupperCaseFuc().slice(0, val);
  //   let arr = [];
  //   let numbers = [...Array(100)].forEach((e, i) => {
  //     arr.push(++i);
  //   });
  //   let array = arr.slice(0, val).join("");
  //   let ar = [...newArr, ...array];
  //   return ar.sort(() => Math.random() - Math.random());
  // };

  // const symbolsGenFunc = () => {
  //   let val = Math.floor(inputValue / 2);
  //   let newArr = numbersGenFunc().slice(0, val);
  //   let symbolsARr = symbolsArr.sort(() => Math.random() - Math.random());
  //   let symbol = symbolsARr.slice(0, val);
  //   let ar = [...symbol, ...newArr].sort(() => Math.random() - Math.random());
  //   return ar;
  // };

  // const generatecode = () => {
  //   if (upperCase && lowerCase && numbers && symbols == true) {
  //     return symbolsGenFunc().join("");
  //   } else if (upperCase && lowerCase && numbers == true) {
  //     return numbersGenFunc().join("");
  //   } else if (lowerCase && symbols == true) {
  //     return symbolLowerCase().join("");
  //   } else if (upperCase && lowerCase == true) {
  //     return lowerAndupperCaseFuc().join("");
  //   } else if (lowerCase) {
  //     return lowercaseFuc();
  //   } else if (upperCase) {
  //     return uppercaseFuc();
  //   }
  // };

  // console.log("Amin Titi =>", generatecode());

  // const symbolsArr = ["!", "#", "€", "%", "&", "/", "=", "+", "?"];
  let alphabethArr = [];
  [...Array(122)].forEach((e, i) => {
    alphabethArr.push(String.fromCharCode(++i));
  });

  const AlphabethAndNumber = [];
  [...Array(100)].forEach((e, i) => {
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

  console.log(generatePassword());

  return (
    <Container maxWidth="xl" className={classes.root}>
      <CodeResult generatePassword={generatePassword} />
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
      <Button text={"Generate"} />
    </Container>
  );
};

export default CodeGen;
