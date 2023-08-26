import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { List } from './List/List';
import { ContactFofm } from './ContactFofm/ContactFofm';

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
    const isInList = this.state.contacts.some(item => item.name === name);
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
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactFofm addContact={this.addContact} />
        </div>
        {!!this.state.contacts.length && (
          <div>
            <h2>Contacts</h2>
            <Filter
              filter={this.state.filter}
              onCnangeFilter={this.changeFilter}
            />
            <List
              contacts={this.state.contacts}
              filter={this.state.filter}
              onDelete={this.deleteContact}
            />
          </div>
        )}
      </div>
    );
  }
}
