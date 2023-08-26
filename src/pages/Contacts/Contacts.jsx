import { PhoneBook, Title } from 'pages/Contacts/Contacts.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { getError, getIsLoading } from 'redux/Contacts/Selectors';
import { fetchContacts } from 'redux/operations';

const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

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
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </PhoneBook>
  );
};

export default Contacts;
