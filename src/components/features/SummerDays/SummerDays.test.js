import React from 'react';
import { shallow } from 'enzyme';
import SummerDays from './SummerDays';

const select = {
  summerDays: '.days',
  summerPromo: '.summerPromo',
};


describe('Component SummerDays', () => {

  it('should render without crashing', () => {
    const component = shallow(<SummerDays />);
    expect(component).toBeTruthy();
  });

  it('should contain days with description', () => {
    const component = shallow(<SummerDays />);
    expect(component.exists(select.summerDays)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkDaysAtDate = (date, expectedDays) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T11:57:58.135Z`);

    const component = shallow(<SummerDays />);
    const renderedDate = component.find(select.summerDays).text();
    expect(renderedDate).toEqual(expectedDays);

    global.Date = trueDate;
  });
};

describe('Component SummerDays with mock Date', () => {
  checkDaysAtDate('2019-06-20', '1 day to summer!');
  checkDaysAtDate('2019-06-10', '11 days to summer!');
  checkDaysAtDate('2019-01-20', '152 days to summer!');
  checkDaysAtDate('2019-07-20', '');
});
