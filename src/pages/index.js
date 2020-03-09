import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


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
    <SEO title="Riku, a web designer." />
    <motion.h1 class="ayylmao"
        transition={spring} animate={{ scale: 1.1, x: 100 }}
          >Hello.</motion.h1>
    <motion.p class="ayylmao"
        transition={spring} animate={{ scale: 1.1, x: 100 }}
          >Welcome to my site!</motion.p>
    <div style={{ maxWidth: `300px` }}>
      <Image class="yaboi"/>
    </div>
  </Layout>
)

export default IndexPage
