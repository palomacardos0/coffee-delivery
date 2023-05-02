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
import { useCart } from '../../../../hooks/useCart'

export function InfoOrder() {
  const {
    cep,
    city,
    street,
    number,
    complement,
    district,
    setCep,
    setCity,
    setDistrict,
    setComplement,
    setStreet,
    setState,
    state,
    setNumber,
    payment,
    setPayment
  } = useCart()

  function handleSelectPayment(event: any) {
    setPayment(event.target.id)
  }

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
          <InputMask
            type="text"
            placeholder="CEP"
            id="cep"
            mask="99999-999"
            value={cep}
            onChange={event => setCep(event.target.value)}
          />
          <input
            type="text"
            placeholder="Rua"
            id="rua"
            value={street}
            onChange={event => setStreet(event.target.value)}
          />
          <input
            type="number"
            placeholder="Número"
            id="numero"
            value={number}
            onChange={event => setNumber(event.target.value)}
          />
          <input
            type="text"
            placeholder="Complemento"
            id="complemento"
            value={complement}
            onChange={event => setComplement(event.target.value)}
          />
          <input
            type="text"
            placeholder="Bairro"
            id="bairro"
            value={district}
            onChange={event => setDistrict(event.target.value)}
          />
          <input
            type="text"
            placeholder="Cidade"
            id="cidade"
            value={city}
            onChange={event => setCity(event.target.value)}
          />
          <input
            type="text"
            placeholder="UF"
            id="uf"
            value={state}
            onChange={event => setState(event.target.value)}
          />
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
          <PaymentFormButton
            selected={payment === 'credito'}
            id={'credito'}
            onClick={handleSelectPayment}
          >
            <CreditCard size={16} />
            Cartão de crédito
          </PaymentFormButton>
          <PaymentFormButton
            selected={payment === 'debito'}
            id={'debito'}
            onClick={handleSelectPayment}
          >
            <Bank size={16} />
            Cartão de débito
          </PaymentFormButton>
          <PaymentFormButton
            selected={payment === 'dinheiro'}
            id={'dinheiro'}
            onClick={handleSelectPayment}
          >
            <Money size={16} />
            Dinheiro
          </PaymentFormButton>
        </PaymentForms>
      </PaymentContainer>
    </InfoOrderContainer>
  )
}
