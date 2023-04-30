import { createContext, ReactNode, useContext, useState } from 'react'
import { Product } from '../@types/product'
import { api } from '../services/api'
import { toast } from 'react-toastify'

interface CartProviderProps {
  children: ReactNode
}

interface UpdateProductAmount {
  productId: number
  amount: number
}
interface CartContextData {
  cart: Product[]
  addProduct: ({ productId, amount }: UpdateProductAmount) => Promise<void>
  removeProduct: (productId: number) => void
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('CoffeeDeliveryCart')

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })

  async function addProduct({ amount, productId }: UpdateProductAmount) {
    try {
      const updatedCart = [...cart]
      const productExists = updatedCart.find(
        product => product.id === productId
      )
      const stock = await api.get(`/stock/${productId}`)

      const stockAmount = stock.data.amount
      const currentAmount = productExists ? productExists.amount : 0
      const quantity = currentAmount + amount

      if (quantity > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque')
        return
      }

      if (productExists) {
        productExists.amount = quantity
      } else {
        const product = await api.get(`/products/${productId}`)

        const newProduct = {
          ...product.data,
          amount: quantity
        }
        updatedCart.push(newProduct)
      }

      setCart(updatedCart)
      localStorage.setItem('CoffeeDeliveryCart', JSON.stringify(updatedCart))
    } catch {
      toast.error('Erro ao adicionar produto')
    }
  }

  async function removeProduct(productId: number) {
    try {
      const updatedCart = [...cart]
      const productIndex = updatedCart.findIndex(
        product => product.id === productId
      )
      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1)
        setCart(updatedCart)
        localStorage.setItem('CoffeeDeliveryCart', JSON.stringify(updatedCart))
      } else {
        throw Error()
      }
    } catch {
      toast.error('Houve um erro na remoção do produto')
    }
  }

  async function updateProductAmount({
    productId,
    amount
  }: UpdateProductAmount) {
    try {
      if (amount <= 0) {
        return
      }

      const stock = await api.get(`/stock/${productId}`)

      const stockAmount = stock.data.amount

      if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque')
        return
      }

      const updatedCart = [...cart]

      const productExists = updatedCart.find(
        product => product.id === productId
      )

      if (productExists) {
        productExists.amount = amount
        setCart(updatedCart)
        localStorage.setItem('CoffeeDeliveryCart', JSON.stringify(updatedCart))
      } else {
        throw Error()
      }
    } catch {
      toast.error('Erro ao alterar a quantidade do produto')
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext)

  return context
}
