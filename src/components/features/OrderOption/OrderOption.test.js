import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render',  () => {
    const type = 'dropdown';
    const id = 'car-rental';
    const component = shallow(<OrderOption type={type} id={id} />);

    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props ', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should show properly prop name in title', () => {
    const name = 'car rental';
    const type = 'dropdown';
    const id = 'car-rental';
    const component = shallow(<OrderOption
      name={name}
      type={type}
      id={id}
    />);
    const renderedTitle = component.find('.title').text();

    expect(renderedTitle).toEqual(name);

  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};

//const testValue = mockProps.values[1].id;
//const testValueNumber = 3;

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    // eslint-disable-next-line no-unused-vars
    let renderedSubcomponent;
    let mockSetOrderOption;

    beforeEach(() => {
      component = shallow(<OrderOption
        type={type}
        setOrderOption={mockSetOrderOption} /* 3 */
        {...mockProps}
        {...mockPropsForType[type]}
      />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });

    /* common tests */
    it('passes dummy test', () => {
      expect(1).toBe(1);
      console.log(component.debug());
      console.log(subcomponent.debug());
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        break;
      }
    }
  });
}
