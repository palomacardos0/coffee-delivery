import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  background: ${props => props.theme['background']};
  padding: 2rem;
  @media (max-width: 764px) {
    padding: 1rem;
  }
  div {
    justify-content: space-between;
    display: flex;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    & > a {
      margin-right: 10px;
    }
  }

  nav {
    display: flex;
    gap: 12px;
    img {
      max-width: 1.4rem;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 148px;
      gap: 0.5rem;
      padding: 0.6rem;
      background: ${props => props.theme['purple-light']};
      border-radius: 8px;
      color: ${props => props.theme['purple-dark']};
      p {
        font-size: 0.9rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      @media (max-width: 350px) {
        max-width: 100px;
      }
    }

    a {
      display: flex;
      letter-spacing: 0;
      padding: 0.5rem;
      border-radius: 4px;
      background: ${props => props.theme['yellow-light']};
    }
  }
`
