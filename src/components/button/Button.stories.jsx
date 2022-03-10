import React from 'react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import Button from './Button';
import generateBadges, { MAINTAINER } from '../../utils/generateBadges';

export default {
	title: 'components/Button',
	component: Button,
	parameters: {
		notes: `A very simple example of notes for the <b>'Button'</b> component. <br /> 
    Any special notes for the <b>'Button'</b> compoment to be added here.`,
		...generateBadges({ badges: [BADGE.STABLE], mainteiners: MAINTAINER.HSUN }),
		// actions: { handles: ['click', 'mouseover', 'click .btn'] },
	},
	// 相關type介紹 https://storybook.js.org/docs/react/essentials/controls#annotation
	argTypes: {
		children: {
			control: { type: 'select' },
			options: ['Icon', 'Bold'],
			mapping: {
				Icon: <span>⭐</span>,
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
