import { createSelector } from "@reduxjs/toolkit";


const selectContacts = state => state.contacts.items;
const selectFilter = state => (state ? state.filter : '');

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);