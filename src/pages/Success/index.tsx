import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import successImage from './assets/success-img.svg'
import { GradientBorder, ItemLista, SuccessContainer } from './styles'
import { useCart } from '../../hooks/useCart'

export function Success() {
  const { street, district, number, city, state, payment } = useCart()
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <GradientBorder>
          <ul>
            <ItemLista variant="purple">
              <MapPin size={16} weight="fill" />
              <span>
                Entrega em{' '}
                <strong>
                  {street}, {number}
                </strong>
                <br />
                {district} - {city}, {state}
              </span>
            </ItemLista>
            <ItemLista variant="yellow">
              <Timer size={16} weight="fill" />
              <span>
                Previsão de entrega <br />
                <strong>20 min - 30 min</strong>{' '}
              </span>
            </ItemLista>
            <ItemLista variant="gold">
              <CurrencyDollar size={16} />

              <span>
                Pagamento na entrega <br />
                <strong>{payment}</strong>
              </span>
            </ItemLista>
          </ul>
        </GradientBorder>
      </div>
      <img src={successImage} alt="" />
    </SuccessContainer>
  )
}
