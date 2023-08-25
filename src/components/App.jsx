import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Title, PhoneBook } from './App.styled';
import { getError, getIsLoading } from 'redux/Selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { BarLoader } from 'react-spinners';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <PhoneBook>
      {isLoading && !error && (
        <BarLoader
          color="white"
          loading={isLoading}
          height={10}
          width={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </PhoneBook>
  );
};
