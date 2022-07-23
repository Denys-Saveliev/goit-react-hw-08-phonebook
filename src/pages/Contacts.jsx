import Container from '../components/Container';
import Section from '../components/Section';
import ContactForm from '../components/contactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { Loader } from '../components/Loader/Loader';
import { useFetchContactsQuery } from 'redux/contacts/contactsApiSlice';
import { useState } from 'react';

const Contacts = () => {
  const [filter, setfilter] = useState('');
  const handleFilterChange = e => setfilter(e.target.value);
  const { isLoading, data } = useFetchContactsQuery();

  const showData = data?.length > 0;

  return (
    <Container>
      <Section title="Create a new contact">
        <ContactForm />
      </Section>
      {isLoading && <Loader />}

      <Section title="Contacts">
        <Filter value={filter} onChange={handleFilterChange} />
        {showData && (
          <ContactList
            contacts={data.filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )}
          />
        )}
      </Section>
    </Container>
  );
};

export default Contacts;
