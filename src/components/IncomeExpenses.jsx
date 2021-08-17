import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  /**
   * Income function below grabs the amount and filters items that are greater than 0 -> then is adds them together (reduce) and gives you a total to 2 decimal places (toFixed)
   * expense does the same but after filtering any numbers lower than 0
   */

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <>
      <div className="inc-exp-container">
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div className="inc-exp-container">
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </>
  );
}

export default IncomeExpenses;
