import React from "react"
import { Nav } from "./styles"
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBehance,
  FaEnvelope,
} from "react-icons/fa"

const Social = props => (
  <Nav>
    <ul>
      <li>
        <a
          href="https://github.com/viniciussalve"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub></FaGithub>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/vinícius-alves-9b151715a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin></FaLinkedin>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vini_alvesssss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter></FaTwitter>
        </a>
      </li>
      <li>
        <a
          href="https://www.behance.net/viniciusalvess"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance></FaBehance>
        </a>
      </li>
      <li>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope></FaEnvelope>
        </a>
      </li>
    </ul>
  </Nav>
)

export default Social
