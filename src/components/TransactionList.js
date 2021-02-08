import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import TransactionItem from "./TransactionItem";
const TransactionList = () => {
  const globalContext = useContext(GlobalContext);
  const { transactions } = globalContext;

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
