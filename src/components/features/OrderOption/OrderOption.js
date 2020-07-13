import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import OrderOptionDropdown from '../OrderOption/OrderOptionDropdown';
import OrderOptionIcons from '../OrderOption/OrderOptionIcons';
import OrderOptionNumber from '../OrderOption/OrderOptionNumber';
import OrderOptionCheckboxes from '../OrderOption/OrderOptionCheckboxes';
import OrderOptionDate from './OrderOptionDate';
import OrderOptionText from './OrderOptiontext';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  date: OrderOptionDate,
  text: OrderOptionText,
};

const OrderOption = ({ name, type, id, setOrderOption, ...otherProps }) => {
  const OptionComponent = optionTypes[type];
  if (!OptionComponent) {
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps}
          id={id}
          setOptionValue={(value) => setOrderOption({ [id]: value })}
        />
      </div>
    );
  }
};

OrderOption.propTypes = {
  name: PropTypes.string,
};
export default OrderOption;
