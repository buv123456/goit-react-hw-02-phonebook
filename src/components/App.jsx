import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactFofm } from './ContactFofm/ContactFofm';
import { Layout, WrapperStyled, Header } from './App.styled';
import Phonebook from './Phonebook/Phonebook';

export class App extends Component {
  state = {
    contacts: [],
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
