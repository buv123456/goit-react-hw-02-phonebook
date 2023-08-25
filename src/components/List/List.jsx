// import { capitalCase } from 'capital-case';
// import { Component } from 'react';

export function List({ contacts, filter, onDelete }) {
  return (
    <div>
      <ul>
        {contacts.reduce((a, contact) => {
          if (
            contact.name.toLowerCase().includes(filter) ||
            contact.number.includes(filter)
          ) {
            a.push(
              <li key={contact.id} name={contact.name}>
                {contact.name}: {contact.number}
                <button
                  type="button"
                  id={contact.id}
                  onClick={e => onDelete(e.target.id)}
                >
                  Delete
                </button>
              </li>
            );
          }
          return a;
        }, [])}
      </ul>
    </div>
  );
}
