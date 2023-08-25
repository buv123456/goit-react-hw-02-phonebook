import { Component } from 'react';
import { List } from './List/List';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    // filter: '',
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value.toLowerCase() });
  };

  onAddContact = e => {
    e.preventDefault();
    this.setState(({ contacts, name, number }) => ({
      name: '',
      number: '',
      contacts: [...contacts, { name, number }],
    }));
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
        <form onSubmit={this.onAddContact}>
          <label>
            Name
            <input
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.onChange}
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="number"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.onChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        {!!this.state.contacts.length && (
          <List
            contacts={this.state.contacts}
            onchangeFilter={this.onChange}
          ></List>
        )}
      </div>
    );
  }
}
