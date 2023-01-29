import styled from 'styled-components'

export const ContainerListCoffe = styled.section`
  display: flex;
  flex-direction: column;
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  margin: 0 auto;
  max-width: 1120px;
  color: ${props => props.theme['base-subtitle']};
  h2 {
    margin-bottom: 54px;
  }
`
export const CardsList = styled.section`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  gap: 32px;
`
