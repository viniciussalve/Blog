import styled from "styled-components"

export const Hello = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10% 0 6% 0;

  h2 {
    font-family: "Circular Medium";
    color: white;
    opacity: 0.87;
    letter-spacing: -1.5px;
    font-size: 2.4em;
    font-weight: 400;
    line-height: 1.3em;
    max-width: 500px;

    strong {
      color: #d88aff;
      font-weight: 500;
    }

    span {
      padding: 6px;
      background: #d88aff;
    }
  }

  h1 {
    font-family: "Circular Bold";
    letter-spacing: -0.05em;
    color: white;
    opacity: 0.87;
    font-size: 7em;
    margin: -15px 0 0 0;
  }

  p {
    color: white;
    opacity: 0.87;
    font-size: 1.3em;
    line-height: 1.5em;
    width: 80%;
  }
`
