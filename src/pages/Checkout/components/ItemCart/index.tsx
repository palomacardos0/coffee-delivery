import { Trash } from 'phosphor-react'
import { SelectQuantity } from '../../../../components/SelectQuantity'
import coffeImg from '../../../../assets/png/expresso-tradicional.png'
import { ItemCartContent, QuantityContent, RemoveButton } from './styles'

export function ItemCart() {
  return (
    <ItemCartContent>
      <img src={coffeImg} alt="" />
      <div>
        <span>Expresso Tradicional</span>
        <QuantityContent>
          <SelectQuantity />
          <RemoveButton>
            <Trash size={16} /> remover
          </RemoveButton>
        </QuantityContent>
      </div>
      <strong>R$ 9,90</strong>
    </ItemCartContent>
  )
}
