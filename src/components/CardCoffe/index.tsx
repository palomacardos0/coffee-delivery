import {
  AddToCart,
  CardCoffeeContainer,
  Flag,
  InputContent,
  ValueContent
} from './styles'
import coffe from '../../assets/png/expresso-tradicional.png'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

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
        <InputContent>
          <button>
            <Minus size={14} weight="bold" color="#8047F8" />
          </button>
          <input type="number" value={0} />
          <button>
            <Plus size={14} weight="bold" color="#8047F8" />
          </button>
        </InputContent>

        <AddToCart>
          <ShoppingCartSimple size={19} weight="fill" color="#fff" />
        </AddToCart>
      </ValueContent>
    </CardCoffeeContainer>
  )
}
