module.exports = name => `import React from 'react';
import PropTypes from 'prop-types';

const ${name} = () => {
	return <>${name}</>;
};

${name}.defaultProps = {
};

/* Write props detail information and 'npm run updateStory' will help you generate stories's argTypes */
${name}.propTypes = {
	/** CssName */
	className: PropTypes.string,
};

export default ${name};
`;
