import styled from 'styled-components'
import { TiArrowRightThick } from "react-icons/ti"

export const Command = styled.span`
  display: flex;
  align-items: center;
  color: #72fff1;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Arrow = styled(TiArrowRightThick)`
  font-size: 1.4rem;
  margin-right: 5px;
  color: #d88aff;
`

export const Result = styled.p`
  color: white;
  margin: 14px 0;
`

export const CustomTerminal = styled.div`
  background: rgb(45, 45, 45);
  border-top: 40px solid rgb(55, 55, 55);
  border-radius: 15px;
  width: 100%;
  padding: 50px 60px;
  font-family: "Roboto Mono", monospace;
`

