import React, { Component} from 'react'
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import gsap from 'gsap'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

const down = <FontAwesomeIcon icon={faChevronCircleLeft} />

class IndexLink extends Component{
    constuctor(props) {
        this.verticalAnimation = this.verticalAnimation.bind(this)

        this.layoutContents = React.createRef()
        this.transitionCover = React.createRef()
    }

    verticalAnimation = ({ length }, direction) => {
        const directionTo = direction === 'up' ? '-100%' : '100%'
        const directionFrom = direction === 'up' ? '100%' : '-100%'
    
        // convert ms to s for gsap
        const seconds = length
    
        return gsap.timeline()
          .set(this.transitionCover, { y: directionFrom })
          .to(this.transitionCover, {
            y: '0%',
            ease: "power1.easeInOut",
            duration: seconds / 3,
          })
          .set(this.layoutContents, { opacity: 0 })
          .to(this.transitionCover, {
            y: directionTo,
            ease: "power1.easeIn",
            duration: seconds / 3,
          })
      }

      test(entry, node) {
        return gsap.from(
          node.querySelectorAll('h2, p, a, pre'),
          { 
            opacity: 0, 
            y: '+=50',
            duration: 1,
            stagger: 0.1,
          },
        )
      }


      render() {
          return(
            <AniLink paintDrip to="/" hex="#30475e">
            { down }
          </AniLink>
          )
      }

} export default IndexLink