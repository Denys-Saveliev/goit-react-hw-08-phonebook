import React from 'react';
import PropTypes from 'prop-types';
import s from './IconButton.module.css';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <button
    type="button"
    className={s.IconButton}
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

export default IconButton;

IconButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};
