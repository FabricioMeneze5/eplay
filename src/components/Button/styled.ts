import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { cores } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: solid 2px
    ${(props) => (props.variant === 'primary' ? cores.verde : cores.branco)};
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : 'transparent'};
  border-radius: 8px;
  font-size: 16px;
  color: ${cores.branco};
  font-weight: bold;
  padding: 8px 16px;
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  border-radius: 8px;
  border: solid 2px ${cores.branco};
  font-size: 16px;
  color: ${cores.branco};
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`
