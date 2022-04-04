import { Container } from "./style";

export function TransactionsTable() {
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Venda</td>
            <td>02/04/2022</td>
          </tr>
          <tr>
            <td>Aluguel do apartamento</td>
            <td className="withdraw">-R$ 1.200,00</td>
            <td>Casa</td>
            <td>27/03/2022</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td className="deposit">R$ 5.400,00</td>
            <td>Venda</td>
            <td>15/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}