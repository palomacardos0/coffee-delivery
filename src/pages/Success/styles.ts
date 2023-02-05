import styled from 'styled-components'
interface varianteProps {
  variant: 'gold' | 'yellow' | 'purple'
}
const colorVariant = {
  gold: '#C47F17',
  yellow: '#DBAC2C',
  purple: '#8047F8'
}

export const SuccessContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 1164px;
  padding: 0 2rem;
  margin: 0 auto;
  align-items: flex-end;
  margin-bottom: 32px;
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${props => props.theme['yellow-dark']};
    margin-bottom: 0.25rem;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
    font-stretch: 100;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    img {
      max-width: 100%;
    }
  }
`

export const GradientBorder = styled.div`
  background: linear-gradient(
    to right,
    ${props => props.theme['yellow']},
    ${props => props.theme['purple']}
  );
  padding: 1px;
  border-radius: 6px 36px;
  ul {
    display: flex;
    flex-direction: column;
    background: ${props => props.theme['background']};
    padding: 40px;
    border-radius: 6px 36px;
    gap: 2rem;
  }
  li {
  }
`

export const ItemLista = styled.li<varianteProps>`
  list-style: none;

  display: flex;
  align-items: center;
  gap: 12px;
  svg {
    margin: 0;
    padding: 8px;
    border-radius: 100%;
    height: 32px;
    width: 32px;
    background: ${props => colorVariant[props.variant]};
    color: ${props => props.theme.background};
  }
  span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${props => props.theme['base-text']};
    width: fit-content;
    strong {
      font-weight: 700;
    }
  }
`
