import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Blog, Post, SLink } from "./styles"
import { FaCalendarAlt } from "react-icons/fa"

const BlogPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            frontmatter {
              date
              title
            }
            fields {
              slug
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Blog>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => (
          <SLink to={`blog/${edge.node.fields.slug}`}>
            <Post>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>
                <FaCalendarAlt />
                <span><strong>Publicado em {edge.node.frontmatter.date}</strong></span>
              </p>
              <p>{edge.node.excerpt}</p>
            </Post>
          </SLink>
        ))}
      </ol>
    </Blog>
  )
}

export default BlogPost
