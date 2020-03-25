import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/layout.css'
import IndexLink from "../components/anilink/indexlink"

const SecondPage = () => (
  <Layout>
    <div style={{textAlign: "center", lineHeight: 1.5, overflow: "hidden"}}>
    <motion.h1 
      initial={{ scale: 0 }}
      animate={{ scale: 1.1 }}
      transition={{
        delay: 1.5
        }}> Hello there, this is my profile page!</motion.h1>
      <motion.h2 
      initial={{ scale: 0 }}
      animate={{ scale: 1.1 }}
      transition={{
        delay: 2
        }}> Ain't that just neat. </motion.h2>
    <div style={{ fontSize: "200%", position: "relative", bottom: "10%" }}>
      <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1.1 }}
      transition={{
        delay: 2.5
        }}><IndexLink />
      </motion.div>
    </div>
    </div>
  </Layout>
)

export default SecondPage
