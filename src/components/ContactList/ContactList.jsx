import PropTypes from 'prop-types';
// React компонент
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
// Стиль
import { List } from './ContactList.styled';

export const ContactList = ({ data, onRemoveContact }) => {
  return (
    <List>
      {data.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            contactName={name}
            contactNumber={number}
            onClick={() => onRemoveContact(id)}
          />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onRemoveContact: PropTypes.func.isRequired,
};