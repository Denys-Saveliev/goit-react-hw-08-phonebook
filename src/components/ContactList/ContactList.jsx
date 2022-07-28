import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, edit }) => {
  return (
    <>
      <ul className={s.list}>
        {contacts.map(contact => (
          <ContactListItem {...contact} key={contact.id} edit={edit} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
