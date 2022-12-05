import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, deleteContacts, addContacts } from './operation'

const allPending = [fetchContacts.pending, deleteContacts.pending, addContacts.pending];
const allFulfilled = [fetchContacts.fulfilled, deleteContacts.fulfilled, addContacts.fulfilled];
const allRejected = [fetchContacts.rejected, deleteContacts.rejected, addContacts.rejected];

const pendingReduser = state => {
    state.isLoading = true;
};

const fulfilledReduser = state => {
    state.isLoading = false;
};

const rejectedReducer = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const fetchContactsReduser = (state, action) => {
    state.items = action.payload;
};

const deleteContactsReduser = (state, action) => {
    state.items = state.items.filter((item) =>
        item.id !== action.payload.id);
    
};

const addContactsReduser = (state, action) => {
    state.items.push(action.payload);
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
            isLoading: false,
            error: null,
        },
    extraReducers: builder => builder
        .addCase(fetchContacts.fulfilled, fetchContactsReduser)
        .addCase(deleteContacts.fulfilled, deleteContactsReduser)
        .addCase(addContacts.fulfilled, addContactsReduser)
        .addMatcher(isAnyOf(...allPending), pendingReduser)
        .addMatcher(isAnyOf(...allFulfilled), fulfilledReduser)
        .addMatcher(isAnyOf(...allRejected), rejectedReducer)
});

export const contactsReducer = contactsSlice.reducer; 

// import { createSlice} from "@reduxjs/toolkit";
// import { fetchContacts, addContacts, deleteContacts } from "./operation";

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };
// const contctsSlice = createSlice({
//   name: "contacts",
//    initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
  
//     extraReducers: {
//      [fetchContacts.pending]: handlePending,
//      [fetchContacts.fulfilled](state, action){
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//       },
//     [fetchContacts.rejected]: handleRejected,
//     [addContacts.pending]: handlePending,
//     [addContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addContacts.rejected]: handleRejected,
//     [deleteContacts.pending]: handlePending,
//     [deleteContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         i => i.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//     [deleteContacts.rejected]: handleRejected,
//     [fetchContacts.rejected]: handleRejected,
//   },
// });


// const getContacts = contctsSlice.reducer;
// export default getContacts;

