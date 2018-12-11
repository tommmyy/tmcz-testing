import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'rebass';
import App from './App';

describe('App', () => {
	it('Button onClick event sets the Clicked text', () => {
		const wrapper = shallow(<App />);

		const button = wrapper.find(Button);

		expect(button.exists()).toBe(true);

		expect(wrapper.find('.Clicked').text()).toBe('');
		button.simulate('click');
		expect(wrapper.find('.Clicked').text()).toBe('Clicked!');
	});

	it('input change  event sets the Age text', () => {
		const wrapper = shallow(<App />);
		const input = wrapper.find('input');

		expect(input.exists()).toBe(true);

		expect(wrapper.find('.Age').text()).toBe('');
		input.simulate('change', { target: { value: '14' } });
		expect(wrapper.find('.Age').text()).toBe('14');
	});
});
