import React from 'react';
import isDevelopMode from './isDevelopMode';

export default {
	title: 'utils/isDevelopMode',
	parameters: {
		notes: 'component note',
	},
	argTypes: {},
};
const Template = () => (
	<>
		<h2>Check mode is develop mode?</h2>
		<h4>{isDevelopMode().toString()}</h4>
	</>
);

export const Default = Template.bind({});
