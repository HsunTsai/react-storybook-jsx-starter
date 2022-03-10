import React from 'react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import generateBadges, { MAINTAINER } from '../../utils/generateBadges';
import Tag from './Tag';

export default {
	title: 'components/Tag',
	parameters: {
		notes: 'Tag component note',
		...generateBadges({ badges: [BADGE.DEPRECATED], mainteiners: MAINTAINER.HSUN }),
	},
	// argTypes introduction => https://storybook.js.org/docs/react/essentials/controls#annotation
	argTypes: {},
};

const Template = args => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
	tags: ['Tag1', 'Tag2', 'Tag3'],
};
