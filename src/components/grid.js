import React, { Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Image3 from '../components/reactimage'
import Image4 from '../components/gatsbyimage'
import Image5 from '../components/graphqlimage'
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import gsap from 'gsap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPortrait } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const portrait = <FontAwesomeIcon icon={faPortrait} />
const idcard = <FontAwesomeIcon icon={faIdCard} />
const code = <FontAwesomeIcon icon={faCode} />

const useStyles = makeStyles(theme => ({
  root: {
    size: "300%",
    paddingTop: 100,
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: '#e7b2a5',
    fontSize: '4rem'
  },
}));


function SpacingGrid() {
  const classes = useStyles();
 
  return (
    <Grid container className={classes.root} spacing={7} justify="center">

      <Grid item xs={4} className={classes.paper}> 
      <AniLink cover to="../projects" direction="right" color="orange">
        {portrait}
      </AniLink>
      </Grid>

      <Grid item xs={4} className={classes.paper}>
        <AniLink cover to="../projects" direction="right">
        <TransitionLink
          exit={{
            delay: 0.2
          }}
          entry={{
            delay: 0.2
          }}>
              {code}
        </TransitionLink>
        </AniLink>
      </Grid>
      <Grid item xs={4} className={classes.paper}> {idcard} </Grid>
      </Grid>
  );
}   export default SpacingGrid