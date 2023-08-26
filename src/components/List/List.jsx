export function List({ contacts, filter, onDelete }) {
  return (
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
                name={contact.id}
                onClick={e => onDelete(e.target.name)}
              >
                Delete
              </button>
            </li>
          );
        }
        return a;
      }, [])}
    </ul>
  );
}
