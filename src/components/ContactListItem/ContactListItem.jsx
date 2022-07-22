import { useDeleteContactMutation } from 'redux/contacts/contactsApiSlice';
import Notiflix from 'notiflix';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDeleteContact = contactId =>
    deleteContact(contactId).then(() =>
      Notiflix.Notify.success('Contact successfully removed!')
    );

  return (
    <li className={s.item}>
      <div className={s.itemContact}>
        <p>{name}:</p> <p>{number}</p>
      </div>
      <button className={s.btn} onClick={() => handleDeleteContact(id)}>
        {isLoading ? <Loader /> : 'Delete'}
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
