import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model, Response } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de site',
          type: 'deposit',
          category: 'Vendas',
          amount: 2500,
          createdAt: new Date('2022-04-08 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 500,
          createdAt: new Date('2022-04-09 09:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });

    this.delete('/transactions/:id', (schema, request) => {
      const id = request.params.id;
      const transaction = schema.find('transaction', id);

      if (transaction) {
        transaction.destroy();
        return { message: 'Transaction deleted successfully' };
      } else {
        return new Response(404, { some: 'header' }, { error: 'Transaction not found' });
      }
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
