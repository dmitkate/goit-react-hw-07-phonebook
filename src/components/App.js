import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import Find from './Filter';
import { FormIn } from './Formin';
import { ContactList } from './Contact';
import { fetchContacts } from '../redux/operation';
import { selectIsLoading, selectError } from '../redux/selectors';


export function App() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <>
      <h1>Phonebook:</h1>
      <FormIn />
      <h2>Contacts:</h2>
      <Find /> 
      {isLoading && <b>Loading tasks...</b>}
      {isError && <b>{isError}</b>}
      <ContactList/> 
    </>
  );
}
