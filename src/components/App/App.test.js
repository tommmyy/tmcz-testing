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

	it('every child of ul is li', () => {
		expect(
			wrapper
				.find('ul')
				.children()
				.every('li')
		).toBe(true);
	});

	it('contains element with property name equal to age', () => {
		expect(wrapper.find('[name="age"]').exists()).toBe(true);
	});

	it('contains element with property variant equal to primary and property active to equal true', () => {
		expect(wrapper.find({ variant: 'primary', active: true }).exists()).toBe(true);
	});
});
