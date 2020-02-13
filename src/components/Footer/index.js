import React from "react"
import { FootBg } from "./styles"
import Social from "../Social"
import { Container, Row, Col } from "reactstrap"

const Footer = () => (
  <FootBg>
    <Container>
      <Row>
        <Col xl="4" sm="12">
          <p>
            Created with{" "}
            <span role="img" aria-label="Purple Heart">
              💜
            </span>{" "}
            by <strong>Vini</strong>
          </p>
        </Col>
        <Col xl="4" sm="12" className="mt-1">
          <span>
            <strong>© {new Date().getFullYear()}</strong>, todos os direitos
            reservados
          </span>
        </Col>
        <Col xl="4" sm="12">
          <Social />
        </Col>
      </Row>
    </Container>
  </FootBg>
)

export default Footer
