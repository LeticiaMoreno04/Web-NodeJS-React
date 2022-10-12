import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
