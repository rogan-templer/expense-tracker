import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial State
// Any global state would go in the object below however for this app will only need the transactions so that calculations can take place in various components
// expenses are represented as a -ve number and income as a +ve number

const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create context

export const GlobalContext = createContext(initialState);

// Provider component
/**This allows other components to have access to the global state.  They can be wrapped within a provider component that then gives them access to the global state in the form of children.
 * The children are whatever is wrapped in the provider component - in this instance it will be the components on App.js.
 */

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // console.log("what even is children", children);

  // ACTIONS
  /**
   * This first action is async as it uses axios which returns a promise
   */

  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
