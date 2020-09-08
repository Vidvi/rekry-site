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

function ProjectTextGrid2() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={7} justify="center">
        <Grid item xs={12} md={6} className={classes.paper}> There's a few projects in my Github. <a link="https://github.com/Vidvi?tab=repositories" target="_blank">View them here.</a> It's always expanding when I'm working on new projects.</Grid>
        <Grid item xs={12} md={6} className={classes.paper}> I've been also getting into IoT stuff by making my own MagicMirror using Raspberry Pi 3. Automating stuff is always fun and seeing it in action is even better. </Grid>
      </Grid>
  );
}   export default ProjectTextGrid2