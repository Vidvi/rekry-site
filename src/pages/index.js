import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Grid from '@material-ui/core/Grid'

import Layout from "../components/layout"
import Image2 from "../components/dataimage"
import Image from "../components/image"
import SEO from "../components/seo"
import { Paper, Menu } from "@material-ui/core"
import { MenuItem } from "react-bootstrap"
import FadeMenu from "../components/fademenu"
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
    <SEO title="Riku Vidqvist" />
    <div style={{margingBottom: "2rem", paddingLeft:"10px"}}>
    <motion.h1 style={{ textAlign: "center", lineHeight: 1.5, fontSize:"5rem", color:"#ba6b57" }}
        transition={spring} 
        animate={{ scale: 1.1, y: 20 }}
          >Hello.</motion.h1>
    <motion.p style={{ textAlign: "center", lineHeight: 1.5, fontSize:"3rem", color:"#ba6b57"}}
        animate={{ scale: 1.1, y: 20 }}
          >Welcome to my site!</motion.p>
    </div>
    <SpacingGrid/>
    <TextGrid />

    <div style={{ maxWidth: `300px` }}>
    </div>
    
    </Layout>
  )

export default IndexPage
