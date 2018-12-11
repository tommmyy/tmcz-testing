import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('contains p with text "Hello world"', () => {
		expect(wrapper.find('p').text()).toEqual('Hello world');
	});

	it('contains one .App', () => {
		expect(wrapper.find('.App').exists()).toBe(true);
	});

	it('contains ul with 2 children', () => {
		expect(wrapper.find('ul').children().length).toBe(2);
	});

	it('contains section with className .Section', () => {
		expect(wrapper.find('section').hasClass('Section')).toBe(true);
	});
});
