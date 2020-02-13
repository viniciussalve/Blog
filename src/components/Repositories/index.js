import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Repository, Tags, Language, Date, Git } from "./styles"
import { Row, Col } from "reactstrap"

const Repositories = () => {
  const { github } = useStaticQuery(
    graphql`
      query {
        github {
          viewer {
            name
            url
            repositories(
              privacy: PUBLIC
              affiliations: OWNER
              isFork: false
              first: 4,
              orderBy: {field: CREATED_AT, direction: DESC}
            ) {
              nodes {
                name
                description
                createdAt
                url

                languages(first: 3) {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <>
      <Row>
        <Col xs="12">
          <Git>
            <h2>
              Meus últimos Repositórios{" "}
              <span role="img" aria-label="Nerd Face">
                🤓
              </span>{" "}
            </h2>

            <p>
              Aqui estão meus últimos projetos! Você pode dar uma olhada em
              todos eles clicando <a href={github.viewer.url}>aqui!</a>
            </p>
          </Git>
        </Col>
      </Row>

      <Row>
        {github.viewer.repositories.nodes.map(reposi => (
          <Col xl="6" md="12" className="mt-5">
            <Repository>
              <h3>{reposi.name}</h3>
              <span>
                <Date>Created at: </Date>
                {reposi.createdAt}
              </span>
              <Tags>
                {reposi.languages.nodes.map(language => (
                  <span>
                    <Language>{language.name}</Language>
                  </span>
                ))}
              </Tags>
              <p>{reposi.description}</p>
            </Repository>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Repositories
