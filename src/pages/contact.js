import React from "react"
import { motion } from "framer-motion"
import IndexLink from "../components/anilink/indexlink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LayoutH from'../components/speclayout.css'

const SecondPage = () => (
  <Layout>
    <div style={{textAlign: "center", lineHeight: 1.5, overflow: "hidden"}}>
    <motion.h1 
      initial={{ scale: 0 }}
      animate={{ scale: 1.1 }}
      transition={{
        delay: 1.5
        }}> Hello there, here is my contact info!</motion.h1>
      <motion.h2 
      initial={{ scale: 0 }}
      animate={{ scale: 1.1 }}
      transition={{
        delay: 2
        }}> Cool beans bro </motion.h2>
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
