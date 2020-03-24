import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Image3 from '../components/reactimage'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 100,
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    width: '4rem',
    height: '4rem'
  },
}));

function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={7} justify="center">
      <Grid item xs={4} className={classes.paper}> <Image3/> </Grid>
      <Grid item xs={4} className={classes.paper}> <Image3/> </Grid>
      <Grid item xs={4} className={classes.paper}> <Image3/> </Grid>
      </Grid>
  );
}   export default SpacingGrid