module.exports = (name, category) => `import React from 'react';
import ${name} from './${name}';

export default {
	title: '${category}/${name}',
	parameters: {
		notes: \'${name} component note\',
	},
	// argTypes introduction => https://storybook.js.org/docs/react/essentials/controls#annotation
	argTypes: {
		/* component argTypes */
		/* component argTypes */
	},
};
const Template = args => <${name} {...args} />;

export const Default = Template.bind({});
Default.args = {};
`;
