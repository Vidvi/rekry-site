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


const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100
}


const IndexPage = () => (
  <Layout>
    <SEO title="Riku Vidqvist" />
    <FadeMenu />
    <div style={{ margingBottom: "2rem" }}>
    <motion.h1 style={{ textAlign: "center", lineHeight: 1.5, size:"1.5" }} 
        transition={spring} animate={{ scale: 1.1, y: 100 }}
          >Hello.</motion.h1>
    <motion.p style={{ textAlign: "center", lineHeight: 1.5 }}
        animate={{ scale: 1.1, y: 100 }}
          >Welcome to my site!</motion.p>
    </div>
    <div style={{ maxWidth: `300px` }}>
    </div>
    
    </Layout>
  )

export default IndexPage
