import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  const [modalEditFormId, setModalEditFormId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleContactItemClick = id => {
    setModalEditFormId(id);
    toggleModal();
  };

  const setInitialFormikValues = id => {
    return contacts.find(contact => contact.id === id);
  };

  const initialValues = setInitialFormikValues(modalEditFormId);

  return (
    <>
      <ul className={s.list}>
        {contacts.map(contact => (
          <ContactListItem
            {...contact}
            key={contact.id}
            edit={() => handleContactItemClick(contact.id)}
          />
        ))}
      </ul>
      {showModal && <Modal onClose={toggleModal} values={initialValues} />}
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
