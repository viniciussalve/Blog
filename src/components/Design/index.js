import React from "react"
import { Text, Thumbnail, DesignContent } from "./styles"
import { Row, Col } from "reactstrap"

const Design = () => (
  <Row>
    <Col xl="12">
      <DesignContent>
        <Text>
          <h2>
            Projetos de Design{" "}
            <span role="img" aria-label="Grinning Face with Star Eyes">
              🤩
            </span>{" "}
          </h2>
          <p>
            Você pode dar uma olhada nos meus projetos de design clicando{" "}
            <a href="https://www.behance.net/viniciusalvess" target="_blank" rel="noopener noreferrer">aqui!</a> tenho experiência com{" "}
            <strong>
              Photoshop, Illustrator, Adobe XD, Premiere e After Effects,
            </strong>{" "}
            tenho noções de UI e UX e gosto muito de construir layouts!
          </p>
        </Text>
        <Thumbnail />
      </DesignContent>
    </Col>
  </Row>
)

export default Design
