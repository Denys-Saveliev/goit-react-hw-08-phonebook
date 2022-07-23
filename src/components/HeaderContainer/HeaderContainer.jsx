import React from 'react';
import s from './HeaderContainer.module.css';
import PropTypes from 'prop-types';

const HeaderContainer = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default HeaderContainer;

HeaderContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
