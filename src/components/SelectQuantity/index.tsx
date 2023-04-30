import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { SelectQuantityContent } from './styles'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { AddToCart } from '../../pages/Home/Components/CardCoffe/styles'

interface SelectQuantityProps {
  productId: number
}

export function SelectQuantity({ productId }: SelectQuantityProps) {
  const [amount, setAmount] = useState(1)
  const { addProduct, cart } = useCart()

  console.log(cart)

  function handleDecrease() {
    if (amount - 1 < 1) {
      setAmount(1)
    } else {
      setAmount(amount - 1)
    }
  }

  return (
    <>
      <SelectQuantityContent>
        <button>
          <Minus size={14} weight="bold" onClick={handleDecrease} />
        </button>
        <input
          type="number"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
        <button>
          <Plus
            size={14}
            weight="bold"
            onClick={() => {
              setAmount(amount + 1)
            }}
          />
        </button>
      </SelectQuantityContent>
      <AddToCart
        onClick={() => {
          addProduct({ productId, amount })
          setAmount(1)
        }}
      >
        <ShoppingCartSimple size={19} weight="fill" color="#fff" />
      </AddToCart>
    </>
  )
}
