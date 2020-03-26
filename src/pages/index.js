import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Grid from '@material-ui/core/Grid'

import Layout from "../components/layout"
import SEO from "../components/seo"
import SpacingGrid from "../components/grid"
import TextGrid from "../components/textgrid"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const spring = {
  type: "spring",
  damping: 8,
  stiffness: 80
}


const IndexPage = () => (
  <Layout>
    <SEO title="Riku Vidqvist"/>
    <div style={{overflow: "hidden"}}>
    <div style={{margingBottom: "2rem"}}>
    <motion.h1 style={{ textAlign: "center", lineHeight: 1.5, fontSize:"5rem", color:"gainsboro" }}
        transition={spring} 
        animate={{ scale: 1, y: 30 }}
          >Hello</motion.h1>
    <motion.p style={{ textAlign: "center", lineHeight: 1.5, fontSize:"3rem", color:"gainsboro"}}
        transition={spring}
        animate={{ scale: 1, y: 20 }}
          >Welcome to my site!</motion.p>
    </div>
    <hr/>
    <div style={{fontSize:"200%", textAlign:"center"}}>
    <SpacingGrid/>
    </div>
    <div style={{color:"gainsboro", textAlign:"center"}}>
    <TextGrid />
    </div>
    </div>
    </Layout>
  )

export default IndexPage
