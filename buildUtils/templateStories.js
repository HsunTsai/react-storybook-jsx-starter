module.exports = (name, category) => `import React from 'react';
import ${name} from './${name}';

const codeGenTypes = {
	/* component argTypes */
	/* component argTypes */
};

export default {
	title: '${category}/${name}',
	parameters: {
		notes: \'${name} component note\',
	},
	// argTypes introduction => https://storybook.js.org/docs/react/essentials/controls#annotation
	argTypes: { ...codeGenTypes },
};
const Template = args => <${name} {...args} />;

export const Default = Template.bind({});
Default.args = {};
`;
