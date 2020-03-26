import React, { Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { motion } from "framer-motion"

import PortraitLink from "./anilink/portraitlink"
import PortfolioLink from "./anilink/portfoliolink"
import ContactLink from "./anilink/contactlink"

const useStyles = makeStyles(theme => ({
  root: {
    size: "300%",
    paddingTop: "7%",
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: '#e7b2a5',
    fontSize: '300%'
  },
}));


function SpacingGrid() {
  const classes = useStyles();
 
  return (
    <Grid container className={classes.root} spacing={7} justify="center">
      <Grid item xs={4}> <PortraitLink/> </Grid>
      <Grid item xs={4}> <PortfolioLink/> </Grid>
      <Grid item xs={4}> <ContactLink/> </Grid>
    </Grid>
  );
}   export default SpacingGrid