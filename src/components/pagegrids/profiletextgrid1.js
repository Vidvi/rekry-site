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

function ProfileTextGrid1() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={7} justify="center">
        <Grid item xs={12} md={6} className={classes.paper}> I'm a third year student at the University of Jyväskylä. I am studying information systems science as my major and economics as a minor.</Grid>
        <Grid item xs={12} md={6} className={classes.paper}> My hobbies include guitar playing, cooking and most importantly, web development! </Grid>
      </Grid>
  );
}   export default ProfileTextGrid1