import React from 'react';
import Header from './components/Header';
import CustomerList from './components/CustomerList';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <CustomerList />
    </div>
  );
};

export default App;
