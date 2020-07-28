import React from 'react';
import styles from './SummerDays.scss';
import PropTypes from 'prop-types';
import {formatDate} from '../../../utils/formatTime';

class SummerDays extends React.Component {
  static propTypes = {
    days: PropTypes.string,
  }

  getCountdownDate() {
    const today = new Date();
    const summer = new Date(Date.UTC(today.getUTCFullYear(),
      5, 21));
    const dateFilter = today.getUTCMonth() === 6 && today.getUTCDate() > 20;
    const summerEnd = today.getUTCMonth() === 9 && today.getUTCDate() < 23;

    if (dateFilter && summerEnd) {
      return '';
    } else if (dateFilter) {
      summer.setFullYear(summer.getFullYear() + 1);
    } else {
      const oneDay = 1000 * 60 * 60 * 24;
      const leftToSummer =
        Math.ceil((summer.getTime() - today.getTime()) / (oneDay));

      return leftToSummer;
    }
  }

  /*if (dateFilter) {
      summer.setFullYear(summer.getFullYear() + 1);
    }
    const oneDay = 1000*60*60*24;
    const leftToSummer =
      Math.ceil((summer.getTime()-today.getTime())/(oneDay));
    if (leftToSummer > 1) {
      return leftToSummer + ' days to summer!';
    } else {
      return leftToSummer + ' day to summer!';
    }
  }*/

  render() {
    const summerTime = formatDate(this.getCountdownDate());
    return (
      <div className={styles.component}>
        {console.log(summerTime)}
        <h3 className={styles.days}>{summerTime}</h3>
      </div>
    );
  }
}

export default SummerDays;
