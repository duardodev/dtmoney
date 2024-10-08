import { useTransactions } from '../../hooks/useTransactions';
import minusCircleIcon from '../../assets/minus-circle.svg';
import { Container } from './styles';

export function TransactionsTable() {
  const { transactions, deleteTransaction } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>

                <td className={transaction.type}>
                  {transaction.type == 'withdraw' ? '-' : ''}
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.amount)}
                </td>

                <td>{transaction.category}</td>

                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>

                <td>
                  <button onClick={() => deleteTransaction(transaction.id)}>
                    <img src={minusCircleIcon} alt="Excluir transação" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
