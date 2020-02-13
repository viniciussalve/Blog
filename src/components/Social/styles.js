import styled from 'styled-components'

export const Nav = styled.nav`
  ul {
    display: flex;
    margin: 0;

    li {
      list-style: none;
      transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
      margin: 0;

      a {
        font-size: 1.5rem;
        margin: 0 13px 0 0;
        color: white;
      }

      &:hover {
        transform: scale(1.15, 1.15);
      }
    }
  }
`