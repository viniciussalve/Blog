import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import BlogPost from "../components/BlogPost"

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <BlogPost />
    </Layout>
  )
}

export default BlogPage
