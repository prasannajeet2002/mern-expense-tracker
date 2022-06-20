import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((totalIncome, currentIncome) => (totalIncome += currentIncome), 0)
    .toFixed(2);

  const expense = (amounts
    .filter((amount) => amount < 0)
    .reduce(
      (totalExpense, currentExpense) => (totalExpense += currentExpense),
      0) * -1  
    )
    .toFixed(2);

  return (
    <>
      <div className="inc-exp-container">
        <div className="income">
          <h4>income</h4>
          <p id="income">Rs.{income}</p>
        </div>
        <div className="expense">
          <h4>expense</h4>
          <p id="expense">-Rs.{expense}</p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpense;
