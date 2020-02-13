import styled from "styled-components"

export const BlogPost = styled.div`
  background: rgba(255, 255, 255, 0.11);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 8%;
`

export const BlogTitle = styled.div`
  background: rgba(255, 255, 255, 0.13);
  padding: 50px;

  h1 {
    margin-bottom: 10px;
    font-size: 2.4em;
  }

  p {
    display: flex;
    align-items: center;
    margin: 5px 0 0 0;
    span {
      margin-left: 8px;

      strong {
        color: #d88aff;
      }
    }
  }
`

export const BlogContent = styled.div`
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 35px 50px;
  font-size: 1.2em;
  opacity: 0.9;
`
