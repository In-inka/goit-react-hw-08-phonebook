import { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import { Form, Label, Input, Btn } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/Selectors';
import { Notify } from 'notiflix';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contact = useSelector(getContacts);
  const [names, setNames] = useState('');
  const [phone, setPhone] = useState('');

  const onChangeInput = e => {
    e.preventDefault();

    switch (e.currentTarget.name) {
      case 'name':
        setNames(e.currentTarget.value);
        break;
      case 'phone':
        setPhone(e.currentTarget.value);
        break;
      default:
        console.log('Sorry...');
    }
  };

  const onSubmitContact = evt => {
    evt.preventDefault();

    if (contact.some(({ name }) => name === names)) {
      Notify.failure(`${names} is already in contacts.`);
      return;
    }
    dispatch(
      addContact({
        id: shortid.generate(),
        name: names,
        phone: phone,
      })
    );
    setNames('');
    setPhone('');
  };

  return (
    <>
      <Form onSubmit={onSubmitContact}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={names}
          onChange={onChangeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label>Number </Label>
        <Input
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInput}
        />
        <Btn type="submit">Add contact</Btn>
      </Form>
    </>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func,
};

export default ContactForm;
