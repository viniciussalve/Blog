import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>
        <Container>
          <main>{children}</main>
        </Container>
      </div>
      <div className="sticky-bottom">
        <Footer />
      </div>
    </>
  )
}

export default Layout
