import { capitalCase } from 'capital-case';
import { nanoid } from 'nanoid';

export function List({ contacts }) {
  return (
    <ul>
      {contacts.map(person => (
        <li key={nanoid()} name={person}>
          {capitalCase(person)}
        </li>
      ))}
    </ul>
  );
}
