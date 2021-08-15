import React from 'react';
import Select from './Select';

export default {
	title: 'components/Select',
	parameters: {
		notes: `A very simple example of notes for the <b>'Button'</b> component. <br /> 
    Any special notes for the <b>'Button'</b> compoment to be added here.`,
	},
	argTypes: {
		onClick: { action: 'clicked' },
		text: {
			options: ['primary', 'secondary', 'success', 'warning'],
			control: { type: 'select' },
		},
	},
};

const Template = args => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = { text: 'Primary' };
