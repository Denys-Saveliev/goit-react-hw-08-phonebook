import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.inputWrapper}>
      <input
        className={s.input}
        placeholder="Find contact by name"
        type="text"
        value={value}
        onChange={onChange}
      />
      <span className={s.inputFocusFilter}></span>
    </div>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
