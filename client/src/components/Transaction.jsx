import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  /**
   * Sign definition uses the ternary to determine if the transaction is a positive or negative
   * Math.abs wrapping transaction amount ensures it is always a whole number then the sign operation will be correct.
   * Ternary in the class name is dynamic so that the border is red or green depending on the transaction type.
   */
  return (
    <>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction._id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </>
  );
}

export default Transaction;
