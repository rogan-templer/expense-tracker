import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
// Any global state would go in the object below however for this app will only need the transactions so that calculations can take place in various components
// expenses are represented as a -ve number and income as a +ve number

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// Create context

export const GlobalContext = createContext(initialState);

// Provider component
/**This allows other components to have access to the global state.  They can be wrapped within a provider component that then gives them access to the global state in the form of children.
 * The children are whatever is wrapped in the provider component - in this instance it will be the XXXX components.
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

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
