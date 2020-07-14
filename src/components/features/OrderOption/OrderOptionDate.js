import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  };

  static propTypes = {
    setOptionValue: PropTypes.func,
  }

  handleChange = date => {
    this.setState({
      startDate: date,
    });
    this.props.setOptionValue(date);
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const {setOptionValue} = this.props;
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default OrderOptionDate;
