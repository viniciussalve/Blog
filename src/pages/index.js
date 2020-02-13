import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Repositories from "../components/Repositories"
import Header from "../components/Header"
import Design from "../components/Design"

const IndexPage = () => (
  <>
    <Header />
    <Layout>
      <SEO title="Home" />
      <Repositories />
      <Design />
    </Layout>
  </>
)

export default IndexPage
