import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const  OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div
    className={styles.icon}
  >
    {required ? '' : (
      <div
        className={styles.icon}
        onClick={setOptionValue('')}
      >
        <Icon name='times-circle' /> none
      </div>
    )}
    {values.map(value => (
      <div
        className={styles.icon + (currentValue === value.id ? ' ' + styles.iconActive : '')}
        key={value.id}
        value={value.id}
        onClick={(event) => setOptionValue(event.currentTarget.id)}
      >
        <Icon name={value.icon} /> {value.name} ({formatPrice(value.price)}) {console.log('asd', setOptionValue)}
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
};

export default OrderOptionIcons;
