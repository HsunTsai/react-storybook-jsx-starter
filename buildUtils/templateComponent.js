const { camelize } = require('./utils');

module.exports = name => `import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './${camelize(name)}.scss';

const ${name} = ({ className }) => {
	return <div className={classNames('${camelize(name)}', className)}>${name}</div>;
};

${name}.defaultProps = {
	className: undefined,
};

/* Write props detail information and 'npm run updateStory' will help you generate stories's argTypes */
${name}.propTypes = {
	/** Css Name */
	className: PropTypes.string,
};

export default ${name};
`;
