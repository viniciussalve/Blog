import styled from "styled-components"

export const BlogPost = styled.div`
  background: rgba(255, 255, 255, 0.14);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 8%;
`

export const BlogTitle = styled.div`
  background: rgba(255, 255, 255, 0.07);
  padding: 50px;

  h1 {
    margin-bottom: 18px;
    font-size: 2.4em;
  }

  h4 {
    margin-bottom: 5px;
    color: #d88aff;
    display: flex;
    align-items: center;

    strong {
      margin-left: 8px;
    }
    
    span {
      margin-left: 8px;
      color: white;
    }
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
  padding: 50px 70px;
  font-size: 1.4em;
  opacity: 0.9;
`
