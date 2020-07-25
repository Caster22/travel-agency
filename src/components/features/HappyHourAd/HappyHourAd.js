import React from 'react';
import PropTypes from 'prop-types';

const getCountdownTime = () => {
  const currentTime = new Date();
  const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

  if(currentTime.getUTCHours() >= 12){
    nextNoon.setUTCDate(currentTime.getUTCDate()+1);
  }
  return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
};

// eslint-disable-next-line react/prop-types
const HappyHourAd = ({ title }) => (
  <div className="countdown">
    <h3 className="title">{title}</h3>
    <div className='promoDescription'>{getCountdownTime()}</div>
  </div>
);

HappyHourAd.prototypes = {
  title: PropTypes.string,
};

export default HappyHourAd;
