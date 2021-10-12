import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => ({
      transactions: [
        { id: 1, amount: 555, category: 'Comida', title: 'ifood', createdAt: new Date() }
      ]
    }))
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
