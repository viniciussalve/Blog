import styled from "styled-components"
import Img from "../../images/design.png"

export const Text = styled.div`
  color: white;
  padding: 70px 50px;

  h2 {
    margin: 0;
    font-size: 1.9em;
  }

  p {
    font-size: 1.3rem;
    margin: 15px 0 0 0;
    line-height: 33px;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    color: #d88aff;
  }
`

export const Thumbnail = styled.div`
  background: url(${Img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`
export const DesignContent = styled.div`
  margin-top: 9%;
  background: rgba(255, 255, 255, 0.11);
  border-radius: 15px;
`
