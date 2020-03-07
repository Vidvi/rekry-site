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
    <SEO title="Home" />
    <motion.h1 class="ayylmao"
        transition={spring} animate={{ scale: 1.1 }}
          >Hello.</motion.h1>
    <motion.p class="ayylmao"
        initial={{opacity: 0}}
        animate={{ x: 50, delay: 5, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
          >Welcome to my site!</motion.p>
    <motion.p>Now go build something great.</motion.p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
