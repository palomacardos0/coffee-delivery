import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'
import { ItemCart } from './components/ItemCart'

export function Checkout() {
  return (
    <main>
      <section>
        <h2>Complete seu pedido</h2>
        <div>
          <MapPinLine size={22} />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
          <div>
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
            <div>
              <button>
                <CreditCard size={16} />
                Cartão de crédito
              </button>
              <button>
                <Bank size={16} />
                cartão de débito
              </button>
              <button>
                <Money size={16} />
                dinheiro
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Cafés selecionados</h2>
        <div>
          <ItemCart />
          <ItemCart />

          <div>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div>
            <span>Total</span>
            <span>R$ 33,20</span>
          </div>
          <button>confirmar pedido</button>
        </div>
      </section>
    </main>
  )
}
