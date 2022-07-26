import React from 'react';
import s from './MainContainer.module.css';
import PropTypes from 'prop-types';

const MainContainer = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default MainContainer;

MainContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
