import { CardCoffee } from '../CardCoffe'
import { CardsList, ContainerListCoffe } from './styles'

export function ListCoffes() {
  return (
    <ContainerListCoffe>
      <h2>Nossos Cafés</h2>
      <CardsList>
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
        <CardCoffee />
      </CardsList>
    </ContainerListCoffe>
  )
}
