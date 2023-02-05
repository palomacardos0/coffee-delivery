import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'
import { ItemCart } from './components/ItemCart'
import {
  AddressContainer,
  CartContainer,
  CheckoutContainer,
  InfoOrderContainer,
  InputsContainer,
  PaymentContainer,
  TextContainerPayment,
  TextContainerAddress,
  CartItensContainer,
  ValuesContainer,
  ButtonConfirmOrder,
  PaymentForms
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <InfoOrderContainer>
        <h2>Complete seu pedido</h2>
        <AddressContainer>
          <TextContainerAddress>
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </TextContainerAddress>
          <InputsContainer>
            <input type="text" placeholder="CEP" id="cep" />
            <input type="text" placeholder="Rua" id="rua" />
            <input type="text" placeholder="Número" id="numero" />
            <input type="text" placeholder="Complemento" id="complemento" />
            <input type="text" placeholder="Bairro" id="bairro" />
            <input type="text" placeholder="Cidade" id="cidade" />
            <input type="text" placeholder="UF" id="uf" />
          </InputsContainer>
        </AddressContainer>
        <PaymentContainer>
          <TextContainerPayment>
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </TextContainerPayment>
          <PaymentForms>
            <button>
              <CreditCard size={16} />
              Cartão de crédito
            </button>
            <button>
              <Bank size={16} />
              cartão de débito
            </button>
            <button>
              <Money size={16} />
              dinheiro
            </button>
          </PaymentForms>
        </PaymentContainer>
      </InfoOrderContainer>

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

          <ButtonConfirmOrder>confirmar pedido</ButtonConfirmOrder>
        </CartItensContainer>
      </CartContainer>
    </CheckoutContainer>
  )
}
