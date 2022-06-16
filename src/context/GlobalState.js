import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const intialState = {
  transactions: [],
};

// create context
export const GlobalContext = createContext(intialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);

// Actions
function AddTransaction(transaction){
    dispatch({
        type : 'AddTransaction',
        payload: transaction
    })
}

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        AddTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
