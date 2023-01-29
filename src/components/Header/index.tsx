import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import logo from '../../assets/svg/logo.svg'
import local from '../../assets/svg/icon-local.svg'
import checkout from '../../assets/svg/checkout.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <NavLink to={'/'}>
          <img src={logo} alt="" />
        </NavLink>
        <nav>
          <span>
            <img src={local} alt="Localização" />
            <p>Porto Alegre, RS</p>
          </span>
          <NavLink to={'/checkout'}>
            <img src={checkout} alt="Icone de carrinho" />
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
