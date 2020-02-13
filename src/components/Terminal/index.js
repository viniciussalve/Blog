import React from "react"
import { Command, Result, CustomTerminal, Arrow } from "./styles"

const Terminal = () => (
  <CustomTerminal>
    <Command>
      <Arrow /> ~/Vinicius.alves/ ls
    </Command>
    <Result>Design Development</Result>

    <Command>
      <Arrow /> ~/Vinicius.alves/ cd Design && ls
    </Command>
    <Result>Photoshop Illustrator XD Premiere After Effects</Result>

    <Command>
      <Arrow /> ~/Vinicius.alves/ ls
    </Command>
    <Result>Design Development</Result>

    <Command>
      <Arrow /> ~/Vinicius.alves/Design cd ..
    </Command>

    <Command>
      <Arrow /> ~/Vinicius.alves/ cd Development && ls
    </Command>

    <Result>ReactJs React-Native NodeJs Gatsby Graphql</Result>
  </CustomTerminal>
)

export default Terminal
