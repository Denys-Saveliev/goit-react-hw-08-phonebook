import Container from '../components/Container';
import Section from '../components/Section';
import ContactForm from '../components/contactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots } from 'react-loader-spinner';
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
      {isLoading && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#00000080"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      )}

      {showData && (
        <Section title="Contacts">
          <Filter value={filter} onChange={handleFilterChange} />

          <ContactList
            contacts={data.filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )}
          />
        </Section>
      )}
    </Container>
  );
};

export default Contacts;
