import { useDeleteContactMutation } from 'redux/contacts/contactsApiSlice';
import Notiflix from 'notiflix';
import IconButton from 'components/IconButton/IconButton';
import { ReactComponent as DeleteIcon } from '../../Icons/bin.svg';
import { ReactComponent as EditIcon } from '../../Icons/pencil.svg';
import { ReactComponent as PhoneIcon } from '../../Icons/phone.svg';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots } from 'react-loader-spinner';

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
      <div className={s.btnWrapper}>
        <a href={'tel:' + number} className={s.btnLink}>
          <IconButton aria-label="Phone">
            <PhoneIcon fill="#32CD32" width="20px" height="20px" />
          </IconButton>
        </a>

        <IconButton
          aria-label="Edit contact"
          style={{ marginRight: '10px' }}
          onClick={() => edit(id)}
        >
          <EditIcon fill="#00000080" width="20px" height="20px" />
        </IconButton>
        <IconButton
          aria-label="Delete contact"
          onClick={() => handleDeleteContact(id)}
        >
          {isLoading ? (
            <ThreeDots height="20" width="20" color="#00000080" />
          ) : (
            <DeleteIcon fill="#00000080" width="20px" height="20px" />
          )}
        </IconButton>
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
