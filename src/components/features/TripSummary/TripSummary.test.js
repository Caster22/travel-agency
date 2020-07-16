import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate proper link', () => {
    const
      linkId = 'abc',
      testTags = ['key1', 'key2'],
      testImage = 'https://loremflickr.com/',
      testName = 'Turkey',
      testDays = 5,
      testCost = '$51,380.61';


    const component = shallow(<TripSummary
      id={linkId}
      tags={testTags}
      image={testImage}
      name={testName}
      days={testDays}
      cost={testCost}
    />);

    const renderedLink = component.find('.link').prop('to');
    const renderedImage = component.find('img').prop('src');
    const renderedAlt = component.find('img').prop('alt');
    const renderedName = component.find('.title').text();
    const renderedDaysAndCost = component.find('.details').text();

    expect(renderedLink).toEqual('/trip/abc');
    expect(renderedImage).toEqual(testImage);
    expect(renderedAlt).toEqual(testName);
    expect(renderedName).toEqual(testName);
    expect(renderedDaysAndCost).toEqual(testDays + ' days' + 'from ' + testCost );
  });

  it('should throw error without any props except from tags', () => {
    const testTags = ['key1', 'key2'];
    expect(() => shallow(<TripSummary tags={testTags}/>)).toThrow();
  });

  it('should ', () => {
    const testTags = ['key1', 'key2', 'key3'];
    const component = shallow(<TripSummary tags={testTags} />);

    const renderedTag1 = component.find('.tag').at(0).text();
    const renderedTag2 = component.find('.tag').at(1).text();
    const renderedTag3 = component.find('.tag').at(2).text();

    expect(renderedTag1).toEqual(testTags[0]);
    expect(renderedTag2).toEqual(testTags[1]);
    expect(renderedTag3).toEqual(testTags[2]);
  });

  it('throw error if tags are missing or array is empty', () => {
    const testTags = [];
    const component = shallow(<TripSummary tags={testTags} />);
    console.log(component.debug());

    const renderedTags = component.find('.tags').text();
    expect(renderedTags).not.toEqual(<span>{testTags[0]}</span>);

    const component2 = shallow(<TripSummary name='name' />);
    const renderedWithoutTags = component2.find('.tags').text();
    expect(renderedWithoutTags).not.toEqual(<span></span>);
  });
});
