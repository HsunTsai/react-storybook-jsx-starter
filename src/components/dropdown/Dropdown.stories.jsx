import React from 'react';
import Dropdown from './Dropdown';

export default {
	title: 'components/Dropdown',
	parameters: {
		notes: 'some documentation here',
		myAddon: {
			data: 'this data is passed to the addon',
		},
	},
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Basic = () => <Dropdown>hello</Dropdown>;
