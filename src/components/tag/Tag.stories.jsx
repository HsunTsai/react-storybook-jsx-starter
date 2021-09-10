import React from 'react';
import merge from 'lodash/merge';
import Tag from './Tag';

const codeGenTypes = {
	/* component argTypes */
	className: { description: 'CssName' },
	tags: { description: 'Tag List' },
	/* component argTypes */
};

export default {
	title: 'components/Tag',
	parameters: {
		notes: 'Tag component note',
	},
	// argTypes introduction => https://storybook.js.org/docs/react/essentials/controls#annotation
	argTypes: merge(codeGenTypes, {}),
};
const Template = args => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
	tags: ['Tag1', 'Tag2', 'Tag3'],
};
