import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { Game } from '../../Models/Games'

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promocoes} background="gray" title="promoções" />
      <ProductsList games={emBreve} background="black" title="Em Breve" />
    </>
  )
}

export default Home
