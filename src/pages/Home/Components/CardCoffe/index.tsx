import { AddToCart, CardCoffeeContainer, Flag, ValueContent } from './styles'
import { ShoppingCartSimple } from 'phosphor-react'
import { SelectQuantity } from '../../../../components/SelectQuantity'
import { formatPrice } from '../../../../utils/formartPrice'

interface CoffeeProps {
  title: string
  price: number
  image: string
  description: string
  type: [string]
  productId: number
}

export function CardCoffee({
  description,
  image,
  price,
  title,
  type,
  productId
}: CoffeeProps) {
  return (
    <CardCoffeeContainer>
      <img src={image} alt={title} />
      {type.map(tp => {
        return <Flag key={tp}> {tp} </Flag>
      })}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <ValueContent>
        <span>
          R$ <strong>{formatPrice(price)}</strong>
        </span>
        <SelectQuantity productId={productId} />
      </ValueContent>
    </CardCoffeeContainer>
  )
}
