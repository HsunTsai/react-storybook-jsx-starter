module.exports = (name, category) => `import React from 'react';
import generateBadges, { MAINTAINER } from '../../utils/generateBadges';
import ${name} from './${name}';

export default {
	title: '${category}/${name}',
	parameters: { 
		notes: \'${name} component note\',
		...generateBadges({ badges: [BADGE.BETA], mainteiners: [] }),
	},
	// argTypes introduction => https://storybook.js.org/docs/react/essentials/controls#annotation
	argTypes: {},
};

const Template = args => <${name} {...args} />;

export const Default = Template.bind({});
Default.args = {};
`;
