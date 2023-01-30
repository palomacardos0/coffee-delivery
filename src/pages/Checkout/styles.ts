import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
`
export const InfoOrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 640px;
  gap: 12px;
  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const CardsCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;

  background: ${props => props.theme['base-card']};
  padding: 2.5rem;
`
export const AddressContainer = styled(CardsCheckoutContainer)`
  svg {
    color: ${props => props.theme['yellow-dark']};
  }
  input {
    height: 2.62rem;
    border: 1px solid ${props => props.theme['base-button']};
    background: ${props => props.theme['base-input']};
    outline: 0;
    border-radius: 4px;
    padding: 0.75rem;
  }
`
export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 212px 60px;
  gap: 16px 12px;
  grid-template-areas:
    'cep . . ' 'rua rua rua'
    'numero complemento complemento' 'bairro cidade uf';

  input {
    &#cep {
      grid-area: cep;
    }
    &#rua {
      grid-area: rua;
    }
    &#numero {
      grid-area: numero;
    }
    &#complemento {
      grid-area: complemento;
    }
    &#bairro {
      grid-area: bairro;
    }
    &#cidade {
      grid-area: cidade;
    }
    &#uf {
      grid-area: uf;
    }
  }

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
`
export const TextContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 2rem;
  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 2px;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${props => props.theme['base-text']};
  }
`
export const TextContainerAddress = styled(TextContainer)`
  svg {
    color: ${props => props.theme['yellow-dark']};
  }
`
export const TextContainerPayment = styled(TextContainer)`
  svg {
    color: ${props => props.theme['purple']};
  }
`
export const PaymentContainer = styled(CardsCheckoutContainer)`
  svg {
    color: ${props => props.theme['purple']};
  }
  & > div {
    display: flex;
  }
  button {
    flex: 1;
    display: flex;
    height: 3.18rem;
    padding: 16px;
    gap: 12px;
    border: 0;
    background: ${props => props.theme['base-button']};
    border-radius: 6px;
    &:not(:last-child) {
      margin-right: 12px;
    }
    color: font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 160%;
/* or 19px */

text-transform: uppercase;

/* Base/Text */

color: #574F4D;;
  }
`
export const CartContainer = styled.section``
