import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Notiflix from 'notiflix';
import s from './EditContactForm.module.css';
import {
  useEditContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsApiSlice';
import PropTypes from 'prop-types';

const warningNameValidation = () =>
  Notiflix.Notify.failure(
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  );

const warningNumberValidation = () =>
  Notiflix.Notify.failure('Please type a valid Phone number!');

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required(),
  number: yup
    .string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
    )
    .required(),
});

const EditContactForm = ({ close, initialValues }) => {
  const { data } = useFetchContactsQuery();

  const [editContact] = useEditContactMutation();

  const handleSubmit = (values, { resetForm }) => {
    if (
      data.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${values.name} is already in contacts`);
      return;
    }

    editContact(values).then(() =>
      Notiflix.Notify.success('Contact edited succesfully!')
    );

    close();
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={schema}
    >
      <Form className={s.form} autoComplete="off">
        <Field className={s.input} type="text" name="name" />
        <span className={s.inputNameFocus}></span>
        <ErrorMessage name="name" render={warningNameValidation} />

        <Field className={s.input} type="tel" name="number" />
        <span className={s.inputTelFocus}></span>
        <ErrorMessage name="number" render={warningNumberValidation} />

        <button className={s.btn} type="submit">
          Save
        </button>
      </Form>
    </Formik>
  );
};

export default EditContactForm;

EditContactForm.propTypes = {
  close: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};
