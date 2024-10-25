import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

import prodectImg from '../../assets//images/zelda.png'

const Product = () => (
  <Card>
    <img src={prodectImg} />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windowns</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
      suscipit consequatur fugit quaerat in ea voluptatibus delectus nobis
      corrupti, eum nesciunt praesentium qui. Nesciunt blanditiis, iste soluta
      error nobis cum.
    </Descricao>
  </Card>
)

export default Product
