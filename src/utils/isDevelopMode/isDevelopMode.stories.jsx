import React from 'react';
import merge from 'lodash/merge';
import isDevelopMode from './isDevelopMode';

const codeGenTypes = {
	/* component argTypes */
	/* component argTypes */
};

export default {
	title: 'utils/isDevelopMode',
	parameters: {
		notes: 'component note',
	},
	// argTypes introduction => https://storybook.js.org/docs/react/essentials/controls#annotation
	argTypes: merge(codeGenTypes, {}),
};

const Template = () => (
	<>
		<h2>Check mode is develop mode?</h2>
		<h4>{isDevelopMode().toString()}</h4>
	</>
);

export const Default = Template.bind({});
