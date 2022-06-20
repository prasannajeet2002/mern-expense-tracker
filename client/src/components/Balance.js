import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts
    .reduce((accBalance, currentAmount) => (accBalance += currentAmount), 0)
    .toFixed(2);

  return (
    <>
      <div className="balance-container">
        <h3>Your Balance</h3>
        <div className="current_balance">Rs.{total}</div>
      </div>
    </>
  );
};

export default Balance;
