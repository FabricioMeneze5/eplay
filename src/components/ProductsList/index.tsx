import { Game } from '../../Models/Games'
import Product from '../Product'
import { Container, List } from './styled'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const getGameTags = (game: Game) => {
    const tags = []

    //caso o Game não foi lançado
    if (game.release_dade) {
      tags.push(game.release_dade)
    }

    //caso o Game esta com desconto
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    // valor do game
    if (game.prices.current) {
      tags.push(formatPrice(game.prices.current))
    }

    return tags
  }
  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.details.category}
              description={game.description}
              image={game.media.thumbnail}
              infos={getGameTags(game)}
              system={game.details.system}
              title={game.name}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
