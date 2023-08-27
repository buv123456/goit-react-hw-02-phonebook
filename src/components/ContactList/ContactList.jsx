import {
  ButtonStyled,
  ItemInfoStyled,
  ListItemStyled,
  ListStyled,
} from './ContactList.styled';

export function ContactList({ contacts, filter, onDelete }) {
  return (
    <ListStyled>
      {contacts.reduce((a, contact) => {
        if (
          contact.name.toLowerCase().includes(filter) ||
          contact.number.includes(filter)
        ) {
          a.push(
            <ListItemStyled key={contact.id} name={contact.name}>
              <ItemInfoStyled>
                <span>{contact.name}:</span>
                <span> {contact.number}</span>
              </ItemInfoStyled>
              <ButtonStyled
                type="button"
                name={contact.id}
                onClick={e => onDelete(e.target.name)}
              >
                Delete
              </ButtonStyled>
            </ListItemStyled>
          );
        }
        return a;
      }, [])}
    </ListStyled>
  );
}
