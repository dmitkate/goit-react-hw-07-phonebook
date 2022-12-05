import css from './contacts.module.css';

import { useDispatch, useSelector} from 'react-redux';
import { deleteContacts } from 'redux/operation';
import { selectFilterContacts } from 'redux/selectors';
export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterContacts);  
  const handleDalete = ({ id }) => dispatch(deleteContacts( id ));
  return (
    <div>
      <ul>
        {contacts.map(({id,name,number}) => (
          <li className={css.item} key={id}>
            {name}: {number}
            <button
              className={css.btn}
              type="button"
              onClick={() => handleDalete({id})}           >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
