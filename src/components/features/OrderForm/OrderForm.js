import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';

const OrderForm = ({ tripCost, options }) => (

  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={tripCost}  />
      { console.log('lol-1', options)}
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
