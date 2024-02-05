//setup the layer
//we need to tracck the basket


import React,{ createContext, useContext, useReducer } from "react";

//this is the data layeer
export const StateContent = createContext();

//build a provider 
export const StateProvider =({reducer ,initialState,children})=>(
  <StateContent.Provider  value = {useReducer(reducer,initialState)}>
{children}
  </StateContent.Provider>
);

export const useStateValue = () =>useContext(StateContent);