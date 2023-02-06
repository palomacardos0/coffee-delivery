import { NavLink } from 'react-router-dom'
import { InfoOrder } from './components/InfoOrder'
import { ItemCart } from './components/ItemCart'
import {
  CartContainer,
  CheckoutContainer,
  CartItensContainer,
  ValuesContainer,
  ButtonConfirmOrder
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <InfoOrder />
      <CartContainer>
        <h2>Cafés selecionados</h2>
        <CartItensContainer>
          <ItemCart />
          <ItemCart />

          <ValuesContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </ValuesContainer>
          <NavLink to="/success">
            <ButtonConfirmOrder>confirmar pedido</ButtonConfirmOrder>
          </NavLink>
        </CartItensContainer>
      </CartContainer>
    </CheckoutContainer>
  )
}
