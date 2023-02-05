import styled from 'styled-components'

export const ItemCartContent = styled.div`
  display: flex;
  gap: 20px;
  padding: 0.5rem 0.25rem;
  margin: 0 0 1.5rem 0;
  border-bottom: 1px solid ${props => props.theme['base-button']};

  & > div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }
  strong {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    color: ${props => props.theme['base-text']};
  }
  img {
    max-width: 4rem;
    height: fit-content;
  }
  @media (max-width: 764px) {
    display: grid;
    grid-template-columns: max-content max-content;
  }
`

export const QuantityContent = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 1.5rem;
`
export const RemoveButton = styled.button`
  background: ${props => props.theme['base-button']};
  color: ${props => props.theme['base-text']};
  border-radius: 6px;
  border: 0;
  outline: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  padding: 0.5rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  svg {
    color: ${props => props.theme['purple']};
  }
`
