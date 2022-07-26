import React from 'react';
import s from './Container.module.css';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className={s.container}>{children}</div>
);

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
