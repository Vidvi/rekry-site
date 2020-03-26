import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import IndexLink from "../components/anilink/indexlink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/layout.css'
import ProjectTextGrid1 from '../components/pagegrids/projecttextgrid1'
import ProjectTextGrid2 from '../components/pagegrids/projecttextgrid2'

const ProjectPage = () => (
  <Layout>
  <div style={{textAlign: "center", lineHeight: 1.5, overflow: "hidden"}}>
  <motion.h1 
    initial={{ scale: 0 }}
    animate={{ scale: 0.9 }}
    transition={{
      delay: 1.5
      }}> We meet again. Here are some of the projects I've worked on!</motion.h1>
    <motion.h2 
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      delay: 2
      }}> From hackathons to making my own website. </motion.h2>
  <div style={{ marginTop:"5%" }}>
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 2.5
          }}>
            <ProjectTextGrid1/>
            <hr style={{margin: "7%"}}/>
            <ProjectTextGrid2/>
            <div style={{ fontSize:"200%", position: "relative", bottom: "8%" }}>
            <IndexLink/>
          </div>      
      </motion.div>
    </div>
    </div>
  </Layout>
)

export default ProjectPage
