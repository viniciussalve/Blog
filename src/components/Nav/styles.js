import styled from "styled-components"
import { Navbar, NavItem } from "reactstrap"
import { Link } from "gatsby"

export const CNavabar = styled(Navbar)`
  background: rgba(255, 255, 255, 0.13);
  padding: 40px 0;

  ul {
    margin: 0;
  }
`

export const CNavItem = styled(NavItem)`
  margin: 0;

  a {
    text-decoration: none;

    &:hover {
      color: #8958a1;
    }
  }
`

export const CLink = styled(Link)`
  font-size: 1.4em;
  color: #9c9c9c;
  font-weight: bold;
  margin-left: 30px;

  @media (max-width: 767px) {
    margin: 0;
  }
`
export const Contact = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  h3 {
    letter-spacing: -0.04rem;
    margin-bottom: 10px;
    font-size: 1.2rem;
    align-self: flex-start;
    color: white;
  }

  @media (max-width: 767px) {
    margin: 30px 0 20px 0;
  }
`
