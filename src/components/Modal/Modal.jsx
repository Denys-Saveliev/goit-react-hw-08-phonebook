import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import PropTypes from 'prop-types';
import Section from 'components/Section';
import EditContactForm from 'components/EditContactForm/EditContactForm';
import IconButton from 'components/IconButton/IconButton';
import { ReactComponent as CloseIcon } from '../../Icons/closeModal.svg';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, values }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <IconButton onClick={onClose} aria-label="Close Editor">
          <CloseIcon width="25" height="25" fill="#00000080" />
        </IconButton>
        <Section title="Edit your contact">
          <EditContactForm close={onClose} initialValues={values} />
        </Section>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};
