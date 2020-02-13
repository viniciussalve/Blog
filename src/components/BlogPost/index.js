import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Blog, Post, SLink } from "./styles"
import { Tags } from "../Repositories/styles"

const BlogPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
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
          <SLink to="/">
            <Post>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>
                <strong>Publicado em</strong> {edge.node.frontmatter.date}
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
