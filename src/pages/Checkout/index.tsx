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
import { useCart } from '../../hooks/useCart'

export function Checkout() {
  const { cart } = useCart()
  return (
    <CheckoutContainer>
      <InfoOrder />
      <CartContainer>
        <h2>Cafés selecionados</h2>
        <CartItensContainer>
          {cart.map(item => (
            <ItemCart
              productId={item.id}
              amount={item.amount}
              image={item.image}
              price={item.price}
              title={item.title}
            />
          ))}

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
