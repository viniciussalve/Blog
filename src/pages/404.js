import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 style={{color: "white", marginTop: "6%"}}>Nada por aqui...</h1>
    <p style={{color: "white", fontSize: "1.3em"}}>Você pesquisou uma rota que não existe... </p>
  </Layout>
)

export default NotFoundPage
