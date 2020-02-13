import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Repositories from "../components/Repositories"
import Design from "../components/Design"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Repositories />
    <Design />
  </Layout>
)

export default IndexPage
