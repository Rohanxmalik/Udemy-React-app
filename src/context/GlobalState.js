import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const intialState = {
  transactions: [
    { id: 1, text: "Salary", amount: 300 },
    // { id: 2, text: "Flower", amount: -20 },
    // { id: 3, text: "Book", amount: -10 },
    // { id: 4, text: "Camera", amount: 150 },
  ],
};

// Create context
export const GlobalContext = createContext(intialState);

// Provider component
export const GlobelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);

  // Actions
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
