import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import color from "../styles/color";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 50px",
  },
  Typography: {
    fontWeight: "bold",
    color: color.black,
  },
});

export default function Checkboxes({ text, check, setCheck }) {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.root}>
        <Typography className={classes.Typography}>{text}</Typography>
        <Checkbox
          check={check}
          onChange={() => setCheck(!check)}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </Box>
    </div>
  );
}
