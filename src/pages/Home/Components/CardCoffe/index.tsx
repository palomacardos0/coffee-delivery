import {
  CardCoffeeContainer,
  Flag,
  FlagContainer,
  ValueContent
} from './styles'
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
      <FlagContainer>
        {type.map(tp => {
          return <Flag key={tp}> {tp} </Flag>
        })}
      </FlagContainer>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <ValueContent>
        <span>
          <strong>{formatPrice(price)}</strong>
        </span>
        <SelectQuantity productId={productId} />
      </ValueContent>
    </CardCoffeeContainer>
  )
}
