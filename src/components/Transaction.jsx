import React, { useContext } from "react";

function Transaction({ transaction }) {
  return (
    <>
      <li className="minus">
        {transaction.text} <span>-$400</span>
        <button className="delete-btn">x</button>
      </li>
    </>
  );
}

export default Transaction;
