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
      max-width: 158px;
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
      text-decoration: none;
      position: relative;
      strong {
        color: ${props => props.theme['white']};
        background: ${props => props.theme['yellow-dark']};
        text-decoration: none;
        border-radius: 999px;
        line-height: 12px;
        position: absolute;
        padding: 2px 4px;
        top: -4px;
        right: 0;
      }
    }
  }
`
export const DarkModeButton = styled.button`
  background: transparent;
  border-radius: 9999px;
  display: flex;
  line-height: 0;
  align-items: center;
  justify-content: center;
  padding: 3px;
  border: 1px solid ${props => props.theme['base-text']};
  height: 30px;
  width: 60px;
  position: relative;

  svg {
    position: absolute;
    left: ${props => props.theme['icon-position']};
  }
  svg:nth-child(2) {
    opacity: ${props => props.theme['sun-opacity']};
  }
  svg:nth-child(1) {
    opacity: ${props => props.theme['moon-opacicy']};
  }
`
