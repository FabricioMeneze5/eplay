import ProductsList from '../../components/ProductsList'
import { Game } from '../../Models/Games'

const promocoes: Game[] = []

const emBreve: Game[] = []

const Categories = () => (
  <>
    <ProductsList games={promocoes} background="gray" title="RPG" />
    <ProductsList games={emBreve} background="black" title="Ação" />
    <ProductsList games={promocoes} background="gray" title="Aventura" />
    <ProductsList games={emBreve} background="black" title="FPS" />
  </>
)

export default Categories
