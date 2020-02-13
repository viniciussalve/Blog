import React, { useState } from "react"
import {
  Collapse,
  Container,
  NavbarToggler,
  Nav
} from "reactstrap"
import Social from "../Social"
import { CNavabar, CLink, CNavItem, Contact } from "./styles"

const MyNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <CNavabar dark expand="md">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Contact className="mr-auto">
              <h3>
                CONTACT ME{" "}
                <span
                  role="img"
                  aria-label="Smiling Face with Hearts
"
                >
                  🥰
                </span>
              </h3>
              <Social />
            </Contact>
            <Nav navbar>
              <CNavItem>
                <CLink to="/" activeStyle={{ color: "white" }}>Projetos</CLink>
              </CNavItem>
              <CNavItem>
                <CLink to="/blog" activeStyle={{ color: "white" }}>Blog</CLink>
              </CNavItem>
            </Nav>
          </Collapse>
        </Container>
      </CNavabar>
    </div>
  )
}

export default MyNav
