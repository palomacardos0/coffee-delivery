import styled from 'styled-components'
import background from '../../assets/png/background.png'

export const BannerContainer = styled.section`
  padding: 5.6rem 2rem 6.75rem;
  background: url(${background});
  background-size: 100% 30rem;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  @media (max-width: 1024px) {
    padding: 4.6rem 1rem 5.75rem;
  }

  img {
    display: flex;
    @media (max-width: 1170px) {
      max-width: 276px;
      object-fit: contain;
    }
    @media (max-width: 1024px) {
      max-width: 100%;
      order: -1;
      margin: 0 auto;
    }
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 588px;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${props => {
      props.theme['base-title']
    }};
    margin-bottom: 1rem;
    @media (max-width: 1024px) {
      font-size: 2rem;
    }
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${props => {
      props.theme['base-subtitle']
    }};
    font-stretch: 100;
    @media (max-width: 1024px) {
      font-size: 1rem;
    }
  }
  color: ${props => {
    props.theme['base-subtitle']
  }};
  ul {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    gap: 20px;
    margin-top: 4.125rem;
    @media (max-width: 1024px) {
      grid-template-columns: max-content;
    }
  }
  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    max-width: 90vw;
    color: ${props => {
      props.theme['base-text']
    }};

    @media (max-width: 1024px) {
      font-size: 0.85rem;
    }

    svg {
      margin: 0;
      padding: 8px;
      border-radius: 100%;
      height: 32px;
      width: 32px;
    }
  }
`
interface varianteProps {
  variant: 'gold' | 'gray' | 'yellow' | 'purple'
}
const colorVariant = {
  gold: '#C47F17',
  gray: '#574F4D',
  yellow: '#DBAC2C',
  purple: '#8047F8'
}

export const ItemList = styled.li<varianteProps>`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  max-width: 90vw;

  @media (max-width: 1024px) {
    font-size: 0.85rem;
  }

  svg {
    margin: 0;
    padding: 8px;
    border-radius: 100%;
    height: 32px;
    width: 32px;
    background: ${props => colorVariant[props.variant]};
  }
`
