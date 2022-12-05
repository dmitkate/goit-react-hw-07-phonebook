import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6388d44ad94a7e5040a81f86.mockapi.io";

export const  fetchContacts = createAsyncThunk(
  "contacts/fetchAll",

  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts_books/api/v1/contacts");
  
      return response.data;
    } catch (e) {
   
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContacts = createAsyncThunk(
  "contacts/addTask",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteTask",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
