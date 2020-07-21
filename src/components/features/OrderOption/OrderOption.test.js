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

const testValue = mockProps.values[1].id;
//const testValueNumber = 3;

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    // eslint-disable-next-line no-unused-vars
    let renderedSubcomponent;
    let mockSetOrderOption; /* 1 */

    beforeEach(() => {
      mockSetOrderOption = jest.fn(); /* 2 */
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
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
      //console.log(component.debug());
      //console.log(subcomponent.debug());
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);
          //console.log(renderedSubcomponent.debug());

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);


          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      case 'icons': {
        it('contains div with class icon and Icon', () => {
          const iconDiv = renderedSubcomponent.find('.icon').at(0);
          expect(iconDiv.length).toBe(1);

          const icon = iconDiv.find('Icon[name="times-circle"]');
          expect(icon.length).toBe(1);
          //console.log(iconDiv.debug());
        });

        it('should run setOrderOption function on Click', () => {
          console.log(renderedSubcomponent.find('.icon').last().debug());

          renderedSubcomponent.find('.icon').last().simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
        });
        break;
      }
    }
  });
}