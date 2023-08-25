import { Component } from 'react';
import { List } from './List/List';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onChangeName = e => {
    this.setState({ name: e.target.value });
  };

  onAddContact = e => {
    e.preventDefault();
    this.setState(prev => ({
      name: '',
      contacts: [...prev.contacts, this.state.name],
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
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
              onChange={this.onChangeName}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        {this.state.contacts[0] && <List contacts={this.state.contacts} />}
      </div>
    );
  }
}
