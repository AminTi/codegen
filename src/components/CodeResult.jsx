import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import CachedIcon from "@material-ui/icons/Cached";
import { IconButton } from "@material-ui/core";
import color from "../styles/color";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    minWidth: "50%",
    background: color.white,
    [theme.breakpoints.down("sm")]: {
      minWidth: "90%",
      marginTop: "8%",
    },
    borderBottom: `8px solid ${color.green}`,
  },
  typo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px 10px",
  },
  box: {
    marginLeft: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const CodeResult = ({ generatePassword }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography className={classes.typo}>
        {null || generatePassword()}
      </Typography>
      <div className={classes.box}>
        <IconButton>
          <CachedIcon />
        </IconButton>
        <IconButton>
          <FileCopyIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default CodeResult;
