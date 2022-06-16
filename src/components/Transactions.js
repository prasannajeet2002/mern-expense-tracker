import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const Transactions = () => {
  const { transactions } = useContext(GlobalContext);

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
