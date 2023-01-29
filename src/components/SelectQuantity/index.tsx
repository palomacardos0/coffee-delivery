import { Minus, Plus } from 'phosphor-react'
import { SelectQuantityContent } from './styles'

export function SelectQuantity() {
  return (
    <SelectQuantityContent>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <input type="number" value={0} />
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </SelectQuantityContent>
  )
}
