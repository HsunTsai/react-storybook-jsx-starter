import React from 'react';
import merge from 'lodash/merge';
import Button from './Button';

const codeGenTypes = {
	/* component argTypes */
	text: { description: '輸入的文字' },
	size: { description: '按鈕的大小' },
	color: { description: '按鈕顏色' },
	children: { description: '按鈕內容' },
	onClick: { description: '點擊後的返回' },
	/* component argTypes */
};

export default {
	title: 'components/Button',
	parameters: {
		notes: `A very simple example of notes for the <b>'Button'</b> component. <br /> 
    Any special notes for the <b>'Button'</b> compoment to be added here.`,
		// actions: { handles: ['click', 'mouseover', 'click .btn'] },
	},
	// 相關type介紹 https://storybook.js.org/docs/react/essentials/controls#annotation
	argTypes: merge(codeGenTypes, {
		text: { control: 'text' },
		size: {
			options: ['small', 'medium', 'large'],
			control: { type: 'select' },
		},
		color: { control: 'color' },
		children: {
			control: { type: 'select' },
			options: ['Icon', 'Bold'],
			mapping: {
				Icon: <span>⭐</span>,
				Bold: <b>Bold Bold</b>,
			},
		},
		onClick: { action: 'clicked' },
	}),
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { size: 'small', text: 'Button' };

export const Green = Template.bind({});
Green.args = { color: 'green', text: 'Green Button' };

export const Custom = Template.bind({});
Custom.args = { color: '#d93333', children: <div>Hi</div> };
