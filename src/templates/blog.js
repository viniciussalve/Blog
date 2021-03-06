import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import { BlogPost, BlogTitle, BlogContent } from "./styles"
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = ({ data }) => {

  return (
    <Layout>
      <SEO title="Post" />
      <BlogPost>
        <BlogTitle>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <h4>
            <FaUserAlt color={"white"}/> <strong>Autor</strong> <span>Vinícius Alves</span>
          </h4>
          <p>
            <FaCalendarAlt />
            <span>
              <strong>Publicado em</strong>{" "}
              {data.markdownRemark.frontmatter.date}
            </span>
          </p>
        </BlogTitle>
        <BlogContent>
          <div
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          ></div>
        </BlogContent>
      </BlogPost>
    </Layout>
  )
}

export default Blog
