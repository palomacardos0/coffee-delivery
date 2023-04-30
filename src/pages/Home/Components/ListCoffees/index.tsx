import { useEffect, useState } from 'react'
import { CardCoffee } from '../CardCoffe'
import { CardsList, ContainerListCoffe } from './styles'
import { api } from '../../../../services/api'

interface CoffeeProps {
  title: string
  price: number
  image: string
  description: string
  type: [string]
  id: number
}

export function ListCoffes() {
  const [products, setProducts] = useState<CoffeeProps[]>([])

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<CoffeeProps[]>('products')

      setProducts(response.data)
    }

    loadProducts()
  }, [])
  return (
    <ContainerListCoffe>
      <h2>Nossos Cafés</h2>
      <CardsList>
        {products.map(product => {
          return (
            <CardCoffee
              key={product.id}
              description={product.description}
              image={product.image}
              price={product.price}
              title={product.title}
              type={product.type}
              productId={product.id}
            />
          )
        })}
      </CardsList>
    </ContainerListCoffe>
  )
}
