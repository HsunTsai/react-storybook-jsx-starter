import React from 'react';
import PropTypes from 'prop-types';

import './select.scss';

const Select = ({ text, onClick }) => (
	<button className="button" type="button" onClick={onClick}>
		{text}
	</button>
);

Select.defaultProps = {
	text: 'HiHi I am Select',
	onClick: () => {},
};

Select.propTypes = {
	/** Node for children */
	text: PropTypes.string,
	/** onClick callback method prop */
	onClick: PropTypes.func,
};

export default Select;
