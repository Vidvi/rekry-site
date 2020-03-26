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
    lineHeight: 1.5
  },
}));

function ContactTextGrid1() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={7} justify="center">
        <Grid item xs={12} md={6} className={classes.paper}> My email adress is <a href="mailto:rikuvidqvist@hotmail.com"> rikuvidqvist@hotmail.com</a> </Grid>
        <Grid item xs={12} md={6} className={classes.paper}> Or you can just call me if you want, <a href="tel:+358407678747"> here! </a> </Grid>
      </Grid>
  );
}   export default ContactTextGrid1