import css from './contacts.module.css';
import { createSelector } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operation';

export function ContactList() {
  const dispatch = useDispatch;
  
  const handleDelete = ({ id }) => {
    dispatch(deleteContacts(id));
  };
  const contacts = useSelector(state => state.contacts);
  const contactsFilter = useSelector(state => state.filter);

  const visibleContacts = createSelector(
  [contacts,  contactsFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
  
  return (
    <div>
      <ul>
        { visibleContacts.map(i => (
          <li className={css.item} key={nanoid(4)}>
            {i.name}: {i.number}
            <button
              className={css.btn}
              type="button"
              onClick={() => dispatch(handleDelete)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
