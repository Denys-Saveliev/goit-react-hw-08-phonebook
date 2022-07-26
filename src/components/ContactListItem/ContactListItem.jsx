import { useDeleteContactMutation } from 'redux/contacts/contactsApiSlice';

import Notiflix from 'notiflix';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number, edit }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDeleteContact = contactId =>
    deleteContact(contactId).then(() =>
      Notiflix.Notify.success('Contact successfully removed!')
    );

  return (
    <li className={s.item}>
      <div className={s.itemContact}>
        <p className={s.itemText}>{name}:</p>{' '}
        <p className={s.itemText}>{number}</p>
      </div>
      <div>
        <button className={s.btn} onClick={edit}>
          Edit
        </button>
        <button className={s.btn} onClick={() => handleDeleteContact(id)}>
          {isLoading ? <Loader /> : 'Delete'}
        </button>
      </div>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  edit: PropTypes.func.isRequired,
};
