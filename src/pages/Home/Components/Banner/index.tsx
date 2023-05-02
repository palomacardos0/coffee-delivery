import { BannerContainer, ItemList, TextContainer } from './styles'
import coffeeImage from '../../../../assets/png/coffee.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

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
          <ItemList variant="gold">
            <ShoppingCart size={18} weight="fill" color="#fff" />
            <span>Compra simples e segura</span>
          </ItemList>
          <ItemList variant="gray">
            <Package size={19} weight="fill" color="#fff" />
            <span>Embalagem mantém o café intacto</span>
          </ItemList>
          <ItemList variant="yellow">
            <Timer size={19} weight="fill" color="#fff" />
            <span>Entrega rápida e rastreada</span>
          </ItemList>
          <ItemList variant="purple">
            <Coffee size={19} weight="fill" color="#fff" />
            <span>O café chega fresquinho até você</span>
          </ItemList>
        </ul>
      </TextContainer>
      <img src={coffeeImage} alt="Imagem de café" />
    </BannerContainer>
  )
}
