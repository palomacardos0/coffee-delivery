import { AddToCart, CardCoffeeContainer, Flag, ValueContent } from './styles'
import coffe from '../../../../assets/png/expresso-tradicional.png'
import { ShoppingCartSimple } from 'phosphor-react'
import { SelectQuantity } from '../../../../components/SelectQuantity'

export function CardCoffee() {
  return (
    <CardCoffeeContainer>
      <img src={coffe} alt="Café expresso tradicional" />
      <Flag>Tradicional</Flag>
      <div>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>
      <ValueContent>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <SelectQuantity />

        <AddToCart>
          <ShoppingCartSimple size={19} weight="fill" color="#fff" />
        </AddToCart>
      </ValueContent>
    </CardCoffeeContainer>
  )
}
