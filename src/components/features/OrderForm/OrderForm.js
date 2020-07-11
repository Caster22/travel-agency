import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({ tripCost, options, setOrderOption }) => (

  <Row>
    {pricing.map((pricingData) => (
      <Col md={4} key={pricingData.id} {...pricingData}>
        <OrderOption
          name={pricingData.name}
          type={pricingData.type}
          currentValue={options[pricingData.id]}
          setOrderOption={setOrderOption}
          values={pricingData.values}
          required={pricingData.required}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
  options: PropTypes.object,
};

export default OrderForm;
