import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    size: "300%",
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: 'gainsboro',
  },
}));

function TextGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={7} justify="center">
      <Grid item xs={4} className={classes.paper}> Start by clicking the icon to learn more about me! </Grid>
      <Grid item xs={4} className={classes.paper}> If you click the icon above you can view some of my previous projects! </Grid>
      <Grid item xs={4} className={classes.paper}> Click the icon above to get some contact info. </Grid>
      </Grid>
  );
}   export default TextGrid