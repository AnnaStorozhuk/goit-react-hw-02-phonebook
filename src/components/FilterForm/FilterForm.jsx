import React from 'react';
import css from 'components/FilterForm/FilterForm.module.css'

const Filter = ({ value, changeFilterInput }) => (
  <label className={css.label}>
    <span className={css.text}>Find contacts by name</span>
    <input
    className={css.input}
      type="text"
      name="filter"
      value={value}
      onChange={changeFilterInput}
    />
  </label>
);
export default Filter;