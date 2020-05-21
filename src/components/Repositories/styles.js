import styled from "styled-components"

export const Repository = styled.div`
  background: rgba(255, 255, 255, 0.11);
  padding: 40px 50px;
  border-radius: 15px;
  color: white;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.03, 1.03);
  }

  h3 {
    margin-bottom: 4px;
    font-size: 23px;
  }

  p {
    font-weight: 500;
    font-size: 18px;
  }

  span {
    opacity: 0.85;
    font-size: 16px;
  }
`

export const Date = styled.strong`
  color: #ffffe6;
`

export const Tags = styled.div`
  margin: 13px 0 16px 0;
  display: flex;

  span {
    background-color: #887ce6;
    padding: 1px 15px;
    font-weight: bold;
    border-radius: 5px;
    margin-right: 10px;
    color: white;
  }
`
export const Language = styled.strong`
  color: white;
`

export const Git = styled.div`
  color: white;
  background: rgba(255, 255, 255, 0.11);
  padding: 60px;
  border-radius: 15px;
  margin-top: 9%;

  h2 {
    margin: 0;
    font-size: 1.5em;
  }

  p {
    font-size: 1.3rem;
    margin: 15px 0 0 0;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    color: #d88aff;
  }
`
export const RepoLink = styled.a`
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    outline: 0;
    border: none;
  }
`
