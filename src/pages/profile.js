import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Grid from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/layout.css'
import IndexLink from "../components/anilink/indexlink"
import RikuKuva from "../components/dataimage"
import ProfileTextGrid1 from "../components/pagegrids/profiletextgrid1"
import ProfileTextGrid2 from "../components/pagegrids/profiletextgrid2"

const ProfilePage = () => (
  <Layout>
    <div style={{textAlign: "center", lineHeight: 1.5, overflow: "hidden"}}>
    <motion.h1 
      initial={{ scale: 0 }}
      animate={{ scale: 0.9 }}
      transition={{
        delay: 1.5
        }}> Hello there, here you can find information about me.</motion.h1>
      <motion.h2 
      initial={{ scale: 0 }}
      animate={{ scale: 1.1 }}
      transition={{
        delay: 2
        }}> Ain't that just neat. </motion.h2>
    <div style={{marginTop:"5%"}}>
      <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay: 2.5
        }}>
            <ProfileTextGrid1/>
            <hr style={{margin: "7%"}}/>
            <ProfileTextGrid2/>
            <div style={{ fontSize:"200%", position: "relative", bottom: "8%" }}>
            <IndexLink/>
          </div>      
      </motion.div>
    </div>
    </div>
  </Layout>
)

export default ProfilePage
