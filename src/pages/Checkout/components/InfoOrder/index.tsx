import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'
import {
  AddressContainer,
  InfoOrderContainer,
  InputsContainer,
  PaymentContainer,
  PaymentFormButton,
  PaymentForms,
  TextContainerAddress,
  TextContainerPayment
} from './styles'
import InputMask from 'react-input-mask'

export function InfoOrder() {
  return (
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
          <InputMask type="text" placeholder="CEP" id="cep" mask="99999-999" />
          <input type="text" placeholder="Rua" id="rua" />
          <input type="number" placeholder="Número" id="numero" />
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
          <PaymentFormButton selected={true}>
            <CreditCard size={16} />
            Cartão de crédito
          </PaymentFormButton>
          <PaymentFormButton selected={false}>
            <Bank size={16} />
            cartão de débito
          </PaymentFormButton>
          <PaymentFormButton selected={false}>
            <Money size={16} />
            dinheiro
          </PaymentFormButton>
        </PaymentForms>
      </PaymentContainer>
    </InfoOrderContainer>
  )
}
