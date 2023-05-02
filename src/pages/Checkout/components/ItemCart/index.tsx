import { Minus, Plus, Trash } from 'phosphor-react'
import { ItemCartContent, QuantityContent, RemoveButton } from './styles'
import { SelectQuantityContent } from '../../../../components/SelectQuantity/styles'
import { useCart } from '../../../../hooks/useCart'
import { formatPrice } from '../../../../utils/formartPrice'

interface SelectQuantityProps {
  productId: number
  amount: number
  image: string
  price: number
  title: string
}

export function ItemCart({
  amount,
  productId,
  image,
  price,
  title
}: SelectQuantityProps) {
  const { updateProductAmount, removeProduct } = useCart()
  return (
    <ItemCartContent>
      <img src={image} alt="" />
      <div>
        <p>{title}</p>
        <QuantityContent>
          <SelectQuantityContent>
            <button disabled={amount <= 1}>
              <Minus
                size={14}
                weight="bold"
                onClick={() => {
                  updateProductAmount({ productId, amount: amount - 1 })
                }}
              />
            </button>
            <input type="number" value={amount} />
            <button>
              <Plus
                size={14}
                weight="bold"
                onClick={() => {
                  updateProductAmount({ productId, amount: amount + 1 })
                }}
              />
            </button>
          </SelectQuantityContent>
          <RemoveButton
            onClick={() => {
              removeProduct(productId)
            }}
          >
            <Trash size={16} /> remover
          </RemoveButton>
        </QuantityContent>
      </div>
      <strong> {formatPrice(price)}</strong>
    </ItemCartContent>
  )
}
