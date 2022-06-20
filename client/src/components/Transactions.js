import React, { useContext , useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const Transactions = () => {
  const { transactions , GetTransactions } = useContext(GlobalContext);

useEffect(() => {
  GetTransactions();
},[])

  return (
    <>
    
      {transactions.map((transaction) => {
        return (
          <Transaction key={transaction.id} transaction={transaction}/>
        );
      })}
      
    </>
  );
};

export default Transactions;
