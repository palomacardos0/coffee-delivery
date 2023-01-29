import styled from 'styled-components'

export const SelectQuantityContent = styled.div`
  margin-left: 1.45rem;
  display: flex;
  max-width: 4.5rem;
  background: ${props => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem 0.75rem;

  button {
    border: 0;
    outline: 0;
    background: transparent;
    svg {
      color: ${props => props.theme['purple']};
      &:hover {
        color: ${props => props.theme['purple-dark']};
      }
    }
  }
  input {
    display: flex;
    height: 21px;
    width: 20px;
    background: transparent;
    border: 0;
    outline: 0;
    text-align: center;
    &::-webkit-inner-spin-button {
      display: none;
      -webkit-appearance: none;
      margin: 0;
    }
  }
`
