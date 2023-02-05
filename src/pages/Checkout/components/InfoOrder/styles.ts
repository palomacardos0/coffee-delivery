import styled from 'styled-components'

interface stateButtonProp {
  selected: boolean
}

export const CardsCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;

  background: ${props => props.theme['base-card']};
  padding: 2.5rem;
  @media (max-width: 764px) {
    padding: 1rem;
  }
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
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${props => props.theme['base-text']};

    &:focus {
      outline: 1px solid ${props => props.theme['yellow']};
    }

    &::placeholder {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: ${props => props.theme['base-label']};
    }
  }
`
export const InfoOrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.938rem;
  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
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

export const InputsContainer = styled.div`
  display: grid;
  gap: 1rem;
  @media (min-width: 764px) {
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
      display: flex;
      flex-direction: column;
    }
  }

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
`

export const PaymentContainer = styled(CardsCheckoutContainer)`
  svg {
    color: ${props => props.theme['purple']};
  }
  & > div {
    display: flex;
  }
`

export const TextContainerPayment = styled(TextContainer)`
  svg {
    color: ${props => props.theme['purple']};
  }
`
export const PaymentForms = styled.section`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 764px) {
    flex-direction: column;
  }
`
export const PaymentFormButton = styled.button<stateButtonProp>`
  flex: 1;
  display: flex;
  height: 3.18rem;
  padding: 16px;
  gap: 12px;
  border: 0;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${props => props.theme['base-text']};
  transition: all 0.2s;

  background: ${props =>
    props.selected ? props.theme['purple-light'] : props.theme['base-button']};
  outline: ${props =>
    props.selected ? `1px solid ${props.theme['purple']}` : 0};

  &:hover {
    background: ${props => props.theme['base-hover']};
    outline: 0;
  }
`
