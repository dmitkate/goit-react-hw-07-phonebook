
import { useSelector} from 'react-redux';
import Find from './Filter';
import { FormIn } from './Formin';
import { ContactList } from './Contact';


export function App() {
  const isLoading = useSelector( state => state.contacts.isLoading);
  const isError = useSelector(state => state.contacts.error);



  return (
    <>
      {isLoading && <b>Loading tasks...</b>}
      {isError && <b>{isError}</b>}

      <h1>Phonebook:</h1>
      <FormIn />
      <h2>Contacts:</h2>
      <Find /> 
   
       <ContactList/> 

    </>
  );
}
