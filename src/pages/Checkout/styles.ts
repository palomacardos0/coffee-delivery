import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1184px;
  margin-top: 2.5rem;
  padding: 0 2rem;
  @media (max-width: 1164px) {
    padding: 0 1rem;
    flex-direction: column;
  }
`

export const CartContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
  a {
    width: 100%;
    button {
      width: 100%;
    }
  }
  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const CartItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  max-width: 448px;
  background: ${props => props.theme['base-card']};
  border-radius: 6px 44px;
  @media (max-width: 1164px) {
    max-width: inherit;
  }
  @media (max-width: 764px) {
    padding: 2.5rem 1rem;
  }
`
export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 24px;
  strong {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
  }
  span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${props => props.theme['base-text']};
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`
export const ButtonConfirmOrder = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  color: ${props => props.theme['white']};
  background: ${props => props.theme['yellow']};
  border-radius: 6px;
  border: 0;
  outline: 0;

  font-stretch: 100;
  padding: 0.75rem;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme['yellow-dark']};
  }
`
export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  svg {
    fill: ${props => props.theme['base-text']};
  }
  h1 {
    text-align: center;
    color: ${props => props.theme['base-text']};
  }
  a {
    display: flex;
    background-color: ${props => props.theme['yellow-dark']};
    padding: 16px;
    border-radius: 4px;
    color: ${props => props.theme['white']};
    text-decoration: none;
    font-weight: 600;
    margin-top: 20px;
  }
`
