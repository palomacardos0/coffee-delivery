import { NavLink } from 'react-router-dom'
import { DarkModeButton, HeaderContainer } from './styles'
import logo from '../../assets/svg/logo.svg'
import { MapPin, Moon, ShoppingCart, SunDim } from 'phosphor-react'
import { useContext } from 'react'
import { DarkModeContext } from '../../App'

export function Header() {
  const { handleChangeDarkMode } = useContext(DarkModeContext)
  return (
    <HeaderContainer>
      <div>
        <NavLink to={'/'}>
          <img src={logo} alt="" />
        </NavLink>
        <nav>
          <DarkModeButton onClick={handleChangeDarkMode}>
            <Moon size={26} color="#171717" />
            <SunDim size={26} color="#FAFAFA" />
          </DarkModeButton>
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
