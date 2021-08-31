import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import color from "../styles/color";
import Paper from "@material-ui/core/Paper";
import { assertClassPrivateProperty } from "@babel/types";
import { minHeight } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  test: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
      padding: "10px 100px",
    },
  },
  root: {
    minWidth: "90%",
  },
  margin: {
    // height: theme.spacing(3),
  },
  title: {
    fontWeight: "bold",
    color: color.black,
    padding: "10px 20px",
  },
  paper: {
    padding: "30px 30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5%",
    fontWeight: "bold",
    border: `0.5px solid ${color.grey}`,
  },
  wrap: {
    [theme.breakpoints.up("xs")]: {
      padding: "10px 20px",
    },
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: color.red,
    // height: 100,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "5px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function CustomizedSlider({ inputValue, setInputValue }) {
  const classes = useStyles();
  return (
    <div className={classes.test}>
      <Paper className={classes.paper}>{inputValue}</Paper>
      <div className={classes.root}>
        <div className={classes.margin} />
        <Typography gutterBottom className={classes.title}>
          Password Length
        </Typography>
        <div className={classes.wrap}>
          <PrettoSlider
            onChange={(_, value) => setInputValue(value)}
            defaultValue={15}
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            min={5}
            max={50}
          />
        </div>
      </div>
    </div>
  );
}
