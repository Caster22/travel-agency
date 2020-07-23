import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import Toast from '../../common/Toast/Toast';
import testList from '../../common/Toast/TestList';



const sendOrder = (options, tripName, tripCode, tripId, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  if (options.name == '' || options.contact == ''){
    console.log('nie wysłano');

  } else {
    const payload = {
      ...options,
      totalCost,
      tripName,
      tripId,
      tripCode,
    };

    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function (response) {
        return response.json();
      }).then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
      });
  }
};

const OrderForm = ({ tripCost, tripId, tripCode, tripName, options, setOrderOption }) => (
  <Row>
    {pricing.map((pricingData) => (
      <Col md={4} key={pricingData.id} {...pricingData}>
        <OrderOption
          {...pricingData}
          currentValue={options[pricingData.id]}
          setOrderOption={setOrderOption}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
    <Button onClick={() => sendOrder(options, tripName, tripCode, tripId, tripCost)}>Order now !</Button>
    <Toast
      toastList={testList}
      position='bottom-right'
    />
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
  options: PropTypes.object,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  tripCode: PropTypes.string,
};

export default OrderForm;
