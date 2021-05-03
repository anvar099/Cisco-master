/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 12px 12px 12px",
    marginTop: theme.spacing(12),
  },
}));

const GridComponent = (props) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={false} sm={3}/>
      <Grid container item className={classes.root} xs={12} md={8} lg={8}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default GridComponent;
