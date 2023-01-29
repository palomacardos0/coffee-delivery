import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import logo from '../../assets/svg/logo.svg'
import checkout from '../../assets/svg/checkout.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <NavLink to={'/'}>
          <img src={logo} alt="" />
        </NavLink>
        <nav>
          <span>
            <MapPin size={24} weight="fill" color="#8047F8" />
            <p>Porto Alegre, RS</p>
          </span>
          <NavLink to={'/checkout'}>
            <ShoppingCart size={25} weight="fill" color="#C47F17" />
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
