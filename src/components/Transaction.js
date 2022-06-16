import React from 'react'

const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-': '+';
  return (
    <>
    <div className="transaction">
            <div className="type">{transaction.text}</div>
            <div className={transaction.amount < 0 ? 'minus':'plus'}>{sign}Rs.{Math.abs(transaction.amount)}</div>
          </div>
    </>
  )
}

export default Transaction