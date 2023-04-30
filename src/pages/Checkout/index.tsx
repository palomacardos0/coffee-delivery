import { NavLink } from 'react-router-dom'
import { InfoOrder } from './components/InfoOrder'
import { ItemCart } from './components/ItemCart'
import {
  CartContainer,
  CheckoutContainer,
  CartItensContainer,
  ValuesContainer,
  ButtonConfirmOrder,
  EmptyCart
} from './styles'
import { useCart } from '../../hooks/useCart'
import { ShoppingCart } from 'phosphor-react'
import { formatPrice } from '../../utils/formartPrice'

export function Checkout() {
  const { cart } = useCart()

  const total = cart.reduce((sumTotal, product) => {
    return sumTotal + product.price * product.amount
  }, 0)

  return (
    <CheckoutContainer>
      {cart.length > 0 ? (
        <>
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
                  <span>R$ {formatPrice(total)}</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$ 3,50</span>
                </div>
                <div>
                  <strong>Total</strong>
                  <strong>R$ {formatPrice(total + 3.5)}</strong>
                </div>
              </ValuesContainer>
              <NavLink to="/success">
                <ButtonConfirmOrder>confirmar pedido</ButtonConfirmOrder>
              </NavLink>
            </CartItensContainer>
          </CartContainer>
        </>
      ) : (
        <EmptyCart>
          <ShoppingCart size={100} weight="fill" />
          <h1>Seu carrinho está vazio</h1>
          <NavLink to={'/'}>Escolher produtos</NavLink>
        </EmptyCart>
      )}
    </CheckoutContainer>
  )
}
