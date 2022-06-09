import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {

  useEffect(() => {
    api.get('transactions')
      .then(response => {
        console.log('TT = ', response.data);
        //setTransictions(response.data)

      })
  }, [])

  //const [transactions, setTransictions] = useState([]);

  return (
    <Container>
      {/* TRANSACTIONS:{transactions?.map((t) => {
        return <strong>{t}</strong>
      })

      } */}
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Carro Novo</td>
            <td className="withdraw"> - R$ 102.000,00</td>
            <td>Nave</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}