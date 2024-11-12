import { useEffect, useState } from 'react'

import { Game } from '../../Models/Games'
import Button from '../Button'
import Tag from '../Tag'

import { Imagem, Titulo, Precos } from './styles'

import { formatPrice } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <div>
          <Tag size="big">Destaque do dia</Tag>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            De <span>{formatPrice(game?.prices.old)}</span> <br />
            por apenas {formatPrice(game?.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/produto/${game?.id}`}
          title="Clique aqui para aproveitar a oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
