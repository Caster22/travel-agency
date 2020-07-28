import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import HappyHourAd from '../../features/HappyHourAd/HappyHourAd';
import SummerDays from '../../features/SummerDays/SummerDays';

const happyTitle = 'Happy Hour!';
const happyDesc = 'It\'s your time! Take advantage of Happy Hour! All offers 20% off!';

const daysTosummer = ' to summer!';

const Hero = ({variant = '', titleText, imageSrc, ...otherProps}) => (

  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    <div className={styles.summerDays}>
      <SummerDays days={daysTosummer} />
    </div>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image}  src={imageSrc} />
    <div className={styles.happyHour}>
      <HappyHourAd title={happyTitle} promoDesc={happyDesc} />
    </div>
  </div>
);

Hero.propTypes = {
  variant: PropTypes.string,
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Hero;
