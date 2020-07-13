import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionText = ({currentValue, id, setOptionValue}) => (
  <div>
    <input
      type='text'
      value={currentValue}
      placeholder={id}
      onChange={(event) => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  id: PropTypes.string,
};

export default OrderOptionText;
