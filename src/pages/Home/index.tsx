import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../Models/Games'

import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import resident from '../../assets/images/resident.png'
import star_wars from '../../assets/images/star_wars.png'
import stree_fighter from '../../assets/images/stree_fighter.png'
import fifa from '../../assets/images/fifa.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['R$ 199,90', '-10%'],
    image: resident
  },
  {
    id: 2,
    title: 'FIFA 23',
    category: 'Esporte',
    system: 'PS5',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    infos: ['R$ 99,90', '-50%'],
    image: fifa
  },
  {
    id: 3,
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['R$ 199,90', '-10%'],
    image: resident
  },
  {
    id: 4,
    title: 'FIFA 23',
    category: 'Esporte',
    system: 'PS5',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    infos: ['R$ 99,90', '-50%'],
    image: fifa
  }
]

const emBreve: Game[] = [
  {
    id: 1,
    title: 'Diablo',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['05/04'],
    image: diablo
  },
  {
    id: 2,
    title: 'Zelda',
    category: 'RPG',
    system: 'Switch',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™',
    infos: ['05/04'],
    image: zelda
  },
  {
    id: 3,
    title: 'Star Wars Jedi Survivor',
    category: 'Aventura',
    system: 'Windows',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['05/04'],
    image: star_wars
  },
  {
    id: 4,
    title: 'Street Fighter 6',
    category: 'Luta',
    system: 'Windows',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    infos: ['05/04'],
    image: stree_fighter
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} background="gray" title="promoções" />
    <ProductsList games={emBreve} background="black" title="Em Breve" />
  </>
)

export default Home
