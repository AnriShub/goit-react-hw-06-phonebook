import { ContactForm } from 'components/ContactForm/ContactForm.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import { ContactList } from 'components/ContactList/ContactList.jsx';

export const App = () => {

  return (<div
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      color: '#010101',
    }}
  >
    <h1>Phonebook</h1>
    <ContactForm />
    <h1>Contacts</h1>
    <Filter />
    <ContactList />
  </div >)
};
