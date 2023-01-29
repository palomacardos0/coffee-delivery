import { BannerContainer, TextContainer } from './styles'
import iconCart from '../../assets/svg/icon-cart.svg'
import iconBox from '../../assets/svg/icon-box.svg'
import iconTimer from '../../assets/svg/icon-timer.svg'
import iconCoffee from '../../assets/svg/icon-coffee.svg'
import coffee from '../../assets/png/coffee.png'

export function Banner() {
  return (
    <BannerContainer>
      <TextContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ul>
          <li>
            <img src={iconCart} alt="Icone de carrinho" />
            <span>Compra simples e segura</span>
          </li>
          <li>
            <img src={iconBox} alt="Icone de caixa" />
            <span>Embalagem mantém o café intacto</span>
          </li>
          <li>
            <img src={iconTimer} alt="Icone de relógio" />
            <span>Entrega rápida e rastreada</span>
          </li>
          <li>
            <img src={iconCoffee} alt="Icone de café" />
            <span>O café chega fresquinho até você</span>
          </li>
        </ul>
      </TextContainer>
      <img src={coffee} alt="Imagem de café" />
    </BannerContainer>
  )
}
