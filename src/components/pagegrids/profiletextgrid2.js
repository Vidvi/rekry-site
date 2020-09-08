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

function ProfileTextGrid2() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={7} justify="center">
        <Grid item xs={12} md={6} className={classes.paper}> I've been learning JS, React, CI/CD and other web development skills mostly in my own time. Becoming a little better every day. </Grid>
        <Grid item xs={12} md={6} className={classes.paper}> I know my way around JavaScript, React, C# and deploying websites with Gatsby and Zeit. Always eager to learn more about anything! </Grid>
      </Grid>
  );
}   export default ProfileTextGrid2