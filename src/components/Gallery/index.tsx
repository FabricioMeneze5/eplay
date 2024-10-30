import Section from '../../components/Section'

import { Items, Item } from './styles'

import imgHL from '../../assets/images/diablo.png'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={imgHL} alt="imagem do Hogwart Legacy" />
      </Item>
      <Item>
        <img src={imgHL} alt="imagem do Hogwart Legacy" />
      </Item>
      <Item>
        <img src={imgHL} alt="imagem do Hogwart Legacy" />
      </Item>
      <Item>
        <img src={imgHL} alt="imagem do Hogwart Legacy" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
