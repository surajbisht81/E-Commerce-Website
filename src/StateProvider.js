import React, { createContext, useContext, useReducer } from "react";

// creating the data layer
export const StateContext = createContext();


export const StateProvider = ({ reducer, initialState, children}) => {
     
    return( <StateContext.Provider value={useReducer(reducer, initialState)}>
               {children}
            </StateContext.Provider>)
};

// pull the item from the data layer
export const useStateValue = () => useContext(StateContext);