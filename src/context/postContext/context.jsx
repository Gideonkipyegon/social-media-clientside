import React, { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

// Initial state for user obj
const storedUI = localStorage.getItem("ui");
const parsedUI = storedUI ? JSON.parse(storedUI) : 'Profile';
const INITIAL_STATE = {
  ui: parsedUI,
};

// Declare createContext
export const Context = createContext(INITIAL_STATE);

// Declare UIContextProvider
export const UIContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("ui", JSON.stringify(state.ui));
  }, [state.ui]);

  return (
    <Context.Provider value={{ ui: state.ui, dispatch }}>
      {children}
    </Context.Provider>
  );
};
