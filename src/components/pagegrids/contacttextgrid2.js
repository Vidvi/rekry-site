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
        <Grid item xs={12} md={6} className={classes.paper}> Also this pages github is <a href="https://github.com/Vidvi/rekry-site">here</a> if you want to check it out. You can find this sites source code there!</Grid>
        <Grid item xs={12} md={6} className={classes.paper}> Well, this is the end of the page. Hope you had a good time! And yes, I like minimalistic design very much. </Grid>
      </Grid>
  );
}   export default ContactTextGrid2