import { ButtonContainer, ButtonLink } from './styled'

type Props = {
  type: 'button' | 'link'
  title: string
  children: string
  to?: string
  onClick?: () => void
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
