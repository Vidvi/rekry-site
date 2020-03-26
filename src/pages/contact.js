import React from "react"
import { motion } from "framer-motion"
import IndexLink from "../components/anilink/indexlink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LayoutH from'../components/speclayout.css'
import RikuKuva from "../components/dataimage"
import ContactTextGrid1 from '../components/pagegrids/contacttextgrid1'
import ContactTextGrid2 from '../components/pagegrids/contacttextgrid2'

const ContactPage = () => (
  <Layout>
    <div style={{textAlign: "center", lineHeight: 1.5, overflow: "hidden"}}>
    <motion.h1 
      initial={{ scale: 0 }}
      animate={{ scale: 0.9 }}
      transition={{
        delay: 1.5
        }}> Hello there, here is my contact info!</motion.h1>
      <motion.h2 
      initial={{ scale: 0 }}
      animate={{ scale: 1.1 }}
      transition={{
        delay: 2
        }}> Contact me if you need some enthusiastic and efficient workforce! </motion.h2>
    <div style={{marginTop:"5%"}}>
      <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay: 2.5
        }}>
          <div style={{width:"30%", position: "relative", left:"35%"}}>
            <RikuKuva/>
          </div>
        <div style={{marginTop:"5%"}}>
            <ContactTextGrid1/>
            <hr style={{margin: "7%"}}/>
            <ContactTextGrid2/>
            <div style={{ fontSize:"200%", position: "relative", bottom: "8%" }}>
            <IndexLink/>
          </div>      
        </div>
      </motion.div>
    </div>
    </div>
  </Layout>
)

export default ContactPage
