import styled from 'styled-components'

export const CardCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 256px;
  background: ${props => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 0 24px 24px 24px;
  margin: 0 auto;

  img {
    margin-top: -20px;
  }
  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
    text-align: center;
    margin: 1rem 0 0.5rem;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.675rem;
    line-height: 130%;
    text-align: center;
    color: ${props => props.theme['base-label']};
    margin-bottom: 33px;
  }
`

export const FlagContainer = styled.div`
  display: flex;
  gap: 4px;
`
export const Flag = styled.span`
  padding: 0.25rem 0.5rem;
  background: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  border-radius: 100px;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
  text-transform: uppercase;
  margin-top: 0.75rem;
`

export const ValueContent = styled.span`
  display: flex;

  span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${props => props.theme['base-text']};
    margin-right: 1.45rem;
  }
  strong {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
  }
`
export const AddToCart = styled.button`
  border: 0;
  outline: 0;
  background: ${props => props.theme['purple-dark']};
  padding: 8px;
  letter-spacing: 0;
  display: flex;
  margin-left: 8px;

  border-radius: 6px;
  transition: background 0.3s;
  &:hover {
    background: ${props => props.theme['purple']};
  }
`
