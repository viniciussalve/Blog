import React from "react"

import Terminal from "../Terminal"
import { Container, Row, Col } from "reactstrap"
import { Hello } from "./styles"

const Header = () => (
  <div style={{ marginBottom: "6%" }}>
    <Container>
      <Row>
        <Col xl="12">
          <Hello>
            <h2>
              <strong>Olá</strong>, tudo bem?! Meu nome é <span>Vinicius</span>{" "}
              e esse é meu
            </h2>
            <h1>Cantinho!</h1>
            <p>
              Tenho 20 anos e esse aqui é meu blog!{" "}
              <span
                role="img"
                aria-label="Hugging Face
"
              >
                🤗
              </span>{" "}
              Sou Desenvolvedor Web, atualmente focado em ReactJs, React Native
              e NodeJs. Me interessei por essa área a mais ou menos 2 anos e
              resolvi criar esse blog pra postar um pouco da minha experiência!
              Espero que goste{" "}
              <span
                role="img"
                aria-label="Purple Heart
"
              >
                💜
              </span>{" "}
            </p>
          </Hello>
        </Col>
      </Row>
      <Row>
        <Col xl="12">
          <Terminal />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Header
