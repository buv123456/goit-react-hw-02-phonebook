import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';
import { PhonebookStyled } from './Phonebook.styled';

function Phonebook({ filter, contacts, onDelete, onCnangeFilter }) {
  return (
    <PhonebookStyled>
      <h2>Contacts</h2>
      <Filter filter={filter} onCnangeFilter={onCnangeFilter} />
      <ContactList contacts={contacts} filter={filter} onDelete={onDelete} />
    </PhonebookStyled>
  );
}

export default Phonebook;
