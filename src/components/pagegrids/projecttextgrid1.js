import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from 'react';

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

function ProjectTextGrid1() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={7} justify="center">
        <Grid item xs={12} md={6} className={classes.paper}> Our team from <a href="https://conthrive.com/">Conthrive</a> put together a hackathon in the beginning of March. Cool experience and even cooler event! </Grid>
        <Grid item xs={12} md={6} className={classes.paper}> Currently I'm acting as the Stakeholder coordinator at <a href="https://www.ideajkl.fi">Idea JKL</a> event.</Grid>
      </Grid>
  );
}   export default ProjectTextGrid1