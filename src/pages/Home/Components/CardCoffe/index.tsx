import { AddToCart, CardCoffeeContainer, Flag, ValueContent } from './styles'
import { ShoppingCartSimple } from 'phosphor-react'
import { SelectQuantity } from '../../../../components/SelectQuantity'

interface CoffeeProps {
  title: string
  price: number
  image: string
  description: string
  type: [string]
}

export function CardCoffee({
  description,
  image,
  price,
  title,
  type
}: CoffeeProps) {
  return (
    <CardCoffeeContainer>
      <img src={image} alt={title} />
      {type.map(tp => {
        return <Flag key={tp}> {tp} </Flag>
      })}
      {/* <Flag>Tradicional</Flag> */}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <ValueContent>
        <span>
          R$ <strong>{price}</strong>
        </span>
        <SelectQuantity />

        <AddToCart>
          <ShoppingCartSimple size={19} weight="fill" color="#fff" />
        </AddToCart>
      </ValueContent>
    </CardCoffeeContainer>
  )
}
