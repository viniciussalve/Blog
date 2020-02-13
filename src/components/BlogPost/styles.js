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
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    span {
      margin-left: 8px;

      strong {
        color: #d88aff;
      }
    }
  }
`

export const Post = styled.li`
  color: white;
  background: rgba(255, 255, 255, 0.11);
  padding: 60px;
  border-radius: 15px;
  margin-bottom: 6%;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.01, 1.01);
  }
`

export const SLink = styled(Link)`
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    outline: 0;
    border: none;
  }
`
