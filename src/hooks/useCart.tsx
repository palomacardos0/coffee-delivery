import { createContext, ReactNode, useState } from "react";
import { Product } from "../@types/product";
import {api} from '../service/api'

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number
  amount: number
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>
  removeProduct: (productId: number) => void
  updateProductAmount: ({productId, amount}: UpdateProductAmount)
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({children}: CartProviderProps){
  const [cart, setCart] = useState<Product[]>([])

  async function addProduct(productId:number) {
    try{
      const updatedCart = [...cart]
      const productExists = updatedCart.find(product => product.id === productId)
      const stock = await api.get(`/stock/${productId}`)

      const stockAmount = stock.data.amount
    }
  }
} 