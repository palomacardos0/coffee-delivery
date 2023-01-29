import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  background: ${props => props.theme['background']};
  padding: 2rem;
  .content {
    justify-content: space-between;
    display: flex;
    width: 100%;
    max-width: 1120px;
  }

  nav {
    display: flex;
    gap: 12px;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.6rem;
      background: ${props => props.theme['purple-light']};
      border-radius: 8px;
      color: ${props => props.theme['purple-dark']};
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
