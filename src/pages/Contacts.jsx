import Container from '../components/Container';
import Section from '../components/Section';
import IconButton from 'components/IconButton/IconButton';
import { ReactComponent as AddIcon } from '../Icons/plus.svg';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { useFetchContactsQuery } from 'redux/contacts/contactsApiSlice';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import AddEditContactForm from 'components/AddEditContactForm/AddEditContactForm';

const Contacts = () => {
  const [modalFormId, setModalFormId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setfilter] = useState('');

  const handleFilterChange = e => setfilter(e.target.value);
  const { data } = useFetchContactsQuery();

  const showData = data?.length > 0;

  const contacts =
    showData &&
    data.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  const toggleModal = () => {
    if (showModal) {
      setModalFormId(null);
    }
    setShowModal(!showModal);
  };

  const setInitialFormikValues = id => {
    return showData && contacts.find(contact => contact.id === id);
  };

  const initialValues = modalFormId
    ? setInitialFormikValues(modalFormId)
    : { name: '', number: '' };

  const handleAddEditContactClick = id => {
    setModalFormId(id);
    toggleModal();
  };

  return (
    <Container>
      <Section title="Create a new contact">
        <IconButton onClick={toggleModal} aria-label="Add contact">
          <AddIcon width="20" height="20" fill="#00000080" />
        </IconButton>
      </Section>

      {showData && (
        <Section title="Contacts">
          <Filter value={filter} onChange={handleFilterChange} />

          <ContactList edit={handleAddEditContactClick} contacts={contacts} />
        </Section>
      )}
      {showModal && (
        <Modal onClose={toggleModal}>
          <Section
            title={modalFormId ? 'Edit your contact' : 'Create a new contact'}
          >
            <AddEditContactForm
              initialValues={initialValues}
              onSubmit={toggleModal}
              modalId={modalFormId}
            />
          </Section>
        </Modal>
      )}
    </Container>
  );
};

export default Contacts;
