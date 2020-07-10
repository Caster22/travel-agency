import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOption = (name) => (
  <div className={styles.component}>
    <h3 className={styles.title}>{name.name}</h3>
    {console.log(name)}
  </div>
);

OrderOption.propTypes = {
  name: PropTypes.string,
};
export default OrderOption;
