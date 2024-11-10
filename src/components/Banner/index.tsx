import { useEffect, useState } from 'react'

import { Game } from '../../Models/Games'
import Button from '../Button'
import Tag from '../Tag'

import { Imagem, Titulo, Precos } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <div>
          <Tag size="big">Destaque do dia</Tag>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            De <span>{game?.prices.old}</span> <br />
            por apenas {game?.prices.current}
          </Precos>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar a oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
