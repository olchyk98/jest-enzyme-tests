import React from 'react';
import Counter from './App';
import { shallow } from 'enzyme';

describe('Test the counter component', () => {
	it('Starts from 0', () => {
		const element = shallow(
			<Counter />
		);
		
		expect( element.find('.display').text() ).toBe('0');
	});

	it('Test if increment button works correctly', () => {
		const element = shallow(
			<Counter />
		);

		element.find('button.increment').simulate('click');

		expect( element.find('.display').text() ).toBe('1');
	});

	it('Test if decrement button works correctly', () => {
		const element = shallow(
			<Counter />
		);

		expect( element.find('.display').text() ).toBe('0');
		element.find('button.decrement').simulate('click');
		expect( element.find('.display').text() ).toBe('-1');
	});

	it('Test if updateVal function correctly updates state', () => {
		const element = shallow(
			<Counter />
		);

		const exN = a => expect( element.state().number ).toBe(a);
		const enR = a => element.instance().updateVal(a);
		const enI = a => expect( element.find('.display').text() ).toBe(a.toString());

		enI(0); // h1
		exN(0); // state
		enR("+"); // func
		exN(1); // state
		enR("-"); // func
		exN(0); // state
		enI(0); // h1
	});
});