import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/layout.css'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the portfolio page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
