import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactFofm } from './ContactFofm/ContactFofm';
import { Layout, WrapperStyled, Header } from './App.styled';
import Phonebook from './Phonebook/Phonebook';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const isInList = this.state.contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    isInList
      ? alert(name + ' is already in contacts list!')
      : this.setState(prev => ({
          contacts: [...prev.contacts, { name, number, id: nanoid() }],
        }));
  };

  changeFilter = filterStr => this.setState({ filter: filterStr });

  deleteContact = idForDel => {
    const newContacts = this.state.contacts.filter(({ id }) => id !== idForDel);
    this.setState({ contacts: [...newContacts] });
  };

  render() {
    return (
      <Layout>
        <WrapperStyled>
          <Header>Phonebook</Header>
          <ContactFofm addContact={this.addContact} />
        </WrapperStyled>
        {!!this.state.contacts.length && (
          <Phonebook
            filter={this.state.filter}
            onCnangeFilter={this.changeFilter}
            contacts={this.state.contacts}
            onDelete={this.deleteContact}
          />
        )}
      </Layout>
    );
  }
}
