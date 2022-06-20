import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'
import axios from 'axios';

const intialState = {
  transactions: [],
  error : null,
  loading: true,
};

// create context
export const GlobalContext = createContext(intialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);

// Actions

// get Transactions
async function GetTransactions(){
  try {
  const res = await axios.get('/api/transactions')

  dispatch({
    type: 'GET_TRANSACTIONS',
    payload : res.data.data
  })
    
  } catch (error) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: error.response.data.error
    })
  }
}

async function AddTransaction(transaction){
const config = {
  headers: {
    'Content-type':'application/json'
  }
}
try {
  const res = await axios.post('/api/transactions' , transaction , config)
  dispatch({
    type : 'AddTransaction',
    payload: res.data.data
})
} catch (error) {
  dispatch({
    type: 'TRANSACTION_ERROR',
    payload: error.response.data.error
  })
}
   
}

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        errors: state.error,
        loading: state.loading,
        GetTransactions,
        AddTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
