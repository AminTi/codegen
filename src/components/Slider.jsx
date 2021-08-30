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
    flexDirection: "row",
  },
  root: {
    minWidth: 300 + theme.spacing(3) * 2,
  },

  margin: {
    height: theme.spacing(3),
  },
  title: {
    fontWeight: "bold",
    color: color.black,
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
}));

const PrettoSlider = withStyles({
  root: {
    color: color.red,
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
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

export default function CustomizedSlider() {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState(15);

  console.log(inputValue);
  return (
    <div className={classes.test}>
      <Paper className={classes.paper}>{inputValue}</Paper>

      <div className={classes.root}>
        <div className={classes.margin} />
        <div>
          <Typography gutterBottom className={classes.title}>
            Password Length
          </Typography>
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
