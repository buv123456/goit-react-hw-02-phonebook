import { capitalCase } from 'capital-case';
import { nanoid } from 'nanoid';
import { Component } from 'react';

export class List extends Component {
  state = {
    filterStr: '',
  };

  onChange = e => {
    this.setState({ filterStr: e.target.value.toLowerCase() });
  };

  render() {
    const filteredContacts = this.props.contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(this.state.filterStr) ||
        contact.number.includes(this.state.filterStr)
    );
    return (
      <div>
        <h2>Contacts</h2>
        <input
          type="text"
          name="filter"
          onChange={this.onChange}
          value={this.state.filterStr}
        />

        <ul>
          {filteredContacts.map(contact => (
            <li key={nanoid()} name={contact.name}>
              {capitalCase(contact.name)}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
