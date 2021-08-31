import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import color from "../styles/color";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: color.white,
  },

  copyright: {
    fontSize: "25px",
    color: color.red,
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      textAling: "center",
    },
  },
  icons: {
    color: color.green,
  },
  tlbr: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },

  iconBox: {
    [theme.breakpoints.down("xs")]: {
      margin: "0 auto",
    },
  },
}));

const BtmBar = ({ text }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.tlbr}>
          <Typography color="inherit" className={classes.copyright}>
            {text}
          </Typography>
          <Box className={classes.iconBox}></Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default BtmBar;
