import React from 'react';
import Button from './Button';

export default {
	title: 'components/Button',
	parameters: {
		notes: `A very simple example of notes for the <b>'Button'</b> component. <br /> 
    Any special notes for the <b>'Button'</b> compoment to be added here.`,
		// actions: { handles: ['click', 'mouseover', 'click .btn'] },
	},
	// 相關type介紹 https://storybook.js.org/docs/react/essentials/controls#annotation
	argTypes: {
		/* component argTypes */
		/* component argTypes */
		text: { control: 'text' },
		size: {
			options: ['small', 'medium', 'large'],
			control: { type: 'select' },
		},
		color: { control: 'color' },
		children: {
			control: { type: 'select' },
			options: ['List', 'Bold'],
			mapping: {
				List: (
					<ul>
						<li>1</li>
						<li>2</li>
					</ul>
				),
				Bold: <b>Bold Bold</b>,
			},
		},
		onClick: { action: 'clicked' },
	},
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { size: 'small', text: 'Button' };

export const Green = Template.bind({});
Green.args = { color: 'green', text: 'Green Button' };

export const Custom = Template.bind({});
Custom.args = { color: '#d93333', children: <div>Hi</div> };
