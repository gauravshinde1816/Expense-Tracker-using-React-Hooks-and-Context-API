import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
const TransactionItem = ({ transaction: { id, text, amount } }) => {
  const { deleteTransaction, UpdateTransactions } = useContext(GlobalContext);
  return (
    <div>
      {amount > 0 ? (
        <li className="plus">
          {text}
          <span>${amount}</span>
          <button onClick={() => deleteTransaction(id)} className="delete-btn">
            x
          </button>
          <button style={{ cursor: "pointer" }}>
            <i className="fa fa-pencil"></i>
          </button>
        </li>
      ) : (
        <li className="minus">
          {text}
          <span> -${Math.abs(amount)}</span>
          <button onClick={() => deleteTransaction(id)} className="delete-btn">
            x
          </button>
          <button style={{ cursor: "pointer" }}>
            <i className="fa fa-pencil"></i>
          </button>
        </li>
      )}
    </div>
  );
};

export default TransactionItem;
