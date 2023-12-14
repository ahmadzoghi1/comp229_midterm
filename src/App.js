import React from 'react';
import NewShopForm from './pages/NewShopForm';
import NewProductForm from './pages/NewProductForm';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <NewShopForm />
      <hr />
      <NewProductForm />
    </div>
  );
}

export default App;
