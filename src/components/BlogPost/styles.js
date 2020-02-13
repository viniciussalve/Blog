import styled from "styled-components"
import { Link } from "gatsby"

export const Blog = styled.div`
  margin-top: 9%;

  ol {
    list-style: none;
  }

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }
`

export const Post = styled.li`
  color: white;
  background: rgba(255, 255, 255, 0.11);
  padding: 70px 60px;
  border-radius: 15px;
  margin-bottom: 6%;
`

export const SLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`
