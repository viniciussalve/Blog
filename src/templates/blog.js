import React from "react"
import SEO from "../components/seo"
import dompurify from "dompurify"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import { BlogPost, BlogTitle, BlogContent } from "./styles"
import { FaCalendarAlt } from "react-icons/fa"

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
  const sanitizer = dompurify.sanitize

  return (
    <Layout>
      <SEO title="BlogPost" />
      <BlogPost>
        <BlogTitle>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <p>
            <FaCalendarAlt />
            <span>
              <strong>Publicado em</strong>{" "}
              {data.markdownRemark.frontmatter.date}
            </span>
          </p>
          <p>
            <strong>Autor</strong> Vinícius Alves
          </p>
        </BlogTitle>
        <BlogContent>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizer(data.markdownRemark.html),
            }}
          ></div>
        </BlogContent>
      </BlogPost>
    </Layout>
  )
}

export default Blog
