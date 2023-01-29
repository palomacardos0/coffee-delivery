import styled from 'styled-components'

export const ContainerListCoffe = styled.section`
  display: flex;
  flex-direction: column;
  font-family: 'Baloo 2';

  margin: 0 auto;
  max-width: 1184px;
  padding: 0 32px;
  color: ${props => props.theme['base-subtitle']};
  @media (max-width: 1024px) {
    padding: 0 16px;
  }
  h2 {
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 54px;
  }
`
export const CardsList = styled.section`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  gap: 32px;
  margin-bottom: 9.8rem;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
`
