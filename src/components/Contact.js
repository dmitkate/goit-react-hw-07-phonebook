import css from './contacts.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector} from 'react-redux';
import { deleteContacts } from 'redux/operation';
import { selectFilterContacts } from 'redux/selectors';
export function ContactList() {
  const dispatch = useDispatch;
  const contacts = useSelector(selectFilterContacts);
  const handleDelete = ({ id }) => {
    dispatch(deleteContacts(id));
  }; 
  
  return (
    <div>
      <ul>
        {contacts.map(i => (
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
