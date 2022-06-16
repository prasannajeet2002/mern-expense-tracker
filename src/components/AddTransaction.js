import React, { useState , useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const {AddTransaction} = useContext(GlobalContext);

  const onSubmit = e =>{
    e.preventDefault();

    const newTransaction = {
        id:Math.floor(Math.random()+100000000),
        text,
        amount: +amount
    }

    AddTransaction(newTransaction)
  }

  return (
    <>
      <div className="form-container">
        <h3>add new transaction</h3>
        <form id="form" onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text" className="label-text">
              Transaction
            </label>
            <br />
            <input
              type="text"
              className="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter transaction..."
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount" className="label-text">
              Amount
              <br />
              (negative-expense , positive - income)
            </label>
            <br />
            <input
              type="number"
              className="amount-spent"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="enter amount spent"
            />
          </div>
          <button className="btn">Add Transaction</button>
        </form>
      </div>
    </>
  );
};

export default AddTransaction;
