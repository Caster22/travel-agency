import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {parseOptionPrice} from '../../../utils/parseOptionPrice';

const OrderOptionNumber = ({limits, price, tripCost, currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input
      type='number'
      className={styles.inputSmall}
      value={currentValue}
      min={limits.min[0]}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
    {' '} $ {(parseOptionPrice(tripCost).value) * (parseFloat(price)/100)}
  </div>
);

OrderOptionNumber.propTypes = {
  limits: PropTypes.object,
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  tripCost: PropTypes.string,
  price: PropTypes.string,
};

export default OrderOptionNumber;
