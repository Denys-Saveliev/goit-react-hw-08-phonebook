import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import PropTypes from 'prop-types';
import IconButton from 'components/IconButton/IconButton';
import { ReactComponent as CloseIcon } from '../../Icons/closeModal.svg';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, children }) {
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
        <IconButton
          onClick={() => {
            onClose();
          }}
          aria-label="Close Editor"
          style={{ position: 'absolute', top: '10px', right: '10px' }}
        >
          <CloseIcon width="10" height="10" fill="#00000080" />
        </IconButton>
        {children}
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
