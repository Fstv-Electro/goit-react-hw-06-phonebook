import { useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, AppTitle } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/Contacts/ContactList';
import Filter from 'components/Filter';
import Section from 'components/Section';
import { getContacts } from 'redux/selectors';


export default function App({title}) {

  const contacts = useSelector(getContacts);

  return (
    <Container>
      <AppTitle>{title}</AppTitle>
      <Section>
        <ContactForm/>
      </Section>

      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList/>
          </>
        ) : (
            <div style={{ color: 'black', fontSize: '20px'}}>U don't have contacts yet!</div>
        )}
      </Section>
      <ToastContainer autoClose={ 3000 } theme={'colored'} />
    </Container>
  );
};