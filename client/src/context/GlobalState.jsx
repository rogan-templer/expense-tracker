import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
// Any global state would go in the object below however for this app will only need the transactions so that calculations can take place in various components
// expenses are represented as a -ve number and income as a +ve number

const initialState = {
  transactions: [],
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
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
