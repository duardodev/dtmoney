import { Container } from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext'

import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import totalIcon from '../../assets/total.svg'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  
  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIcon} alt="Entradas" />
        </header>
        <strong>R$ 17.400,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeIcon} alt="Saídas" />
        </header>
        <strong>- R$ 1.400,00</strong>
      </div>

      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalIcon} alt="Total" />
        </header>
        <strong>R$ 16.900,00</strong>
      </div>
    </Container>
  )
}