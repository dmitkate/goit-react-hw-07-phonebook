import { configureStore } from "@reduxjs/toolkit";
import {contactsReducer}  from "./contactslice";
import { filterReducer } from './filterslice';



export const store = configureStore({
  reducer: {
      contacts: contactsReducer,
      filter: filterReducer,
    },
    
})
