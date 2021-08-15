module.exports = name => `import React from 'react';
import PropTypes from 'prop-types';

const ${name} = () => {
	return <>${name}</>;
}

${name}.defaultProps = {
};

${name}.propTypes = {
};

export default ${name};
`;
