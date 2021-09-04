import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/ContactList/ContactList.module.css'

const ContactList = ({ contacts, onDeleteClick }) => (
  <ul>
    {contacts.map(({ id, name, number }) => {
      return (
          <li
              className={css.li}
              key={id}>
          <p>
            {name}: {number}
          </p>
          <button className={css.button} type="button" onClick={() => onDeleteClick(id)}>
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactList;
