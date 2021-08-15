module.exports = (name, category) => `import React from 'react';
import ${name} from './${name}';

export default {
	title: '${category}/${name}',
	parameters: {
		notes: \'component note\',
	},
	// argTypes introduction => https://storybook.js.org/docs/react/essentials/controls#annotation
	argTypes: {

	},
}
const Template = args => <${name} {...args} />;

export const Default = Template.bind({});
Default.args = {  };
`;
