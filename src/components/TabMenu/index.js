import styled from 'styled-components'
import { Link } from 'wouter'

export const TabMenu = styled(Link)`
  display: inline-block;
  width: min-content;
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  color: var(--color-black);
  font-family: helvetica, verdana, sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background-color: #3333;
  }
`
