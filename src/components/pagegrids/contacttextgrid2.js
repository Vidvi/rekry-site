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

function ContactTextGrid2() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={7} justify="center">
        <Grid item xs={12} md={6} className={classes.paper}> Fast pages truly are the best! I hope you enjoyed your stay here.</Grid>
        <Grid item xs={12} md={6} className={classes.paper}> Well, this is also the end of the page. Hope you had a good time! And yes, I like minimalistic design very much. </Grid>
      </Grid>
  );
}   export default ContactTextGrid2