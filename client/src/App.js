import React from 'react';
import './App.css';
import Header from './components/header'
import Balance from './components/Balance';
import History from './components/History';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';
import IncomeExpense from './components/IncomeExpense';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
    <GlobalProvider>
    <div className='container'>
     <Header/>
     <Balance/>
     <IncomeExpense/>
     <History/>
     <Transactions/>
     <AddTransaction/>
    </div>
    </GlobalProvider>
    </>
  );
}

export default App;
