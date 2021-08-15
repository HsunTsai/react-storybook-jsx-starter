import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const buttonSize = {
	small: 12,
	medium: 16,
	large: 24,
};

const Button = ({ text, size, color, children, onClick }) => (
	<button className="button" style={{ fontSize: buttonSize[size], background: color }} onClick={onClick}>
		{text}
		{children}
	</button>
);

Button.defaultProps = {
	text: undefined,
	size: 'small',
	color: undefined,
	children: undefined,
	onClick: () => {},
};

Button.propTypes = {
	text: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	color: PropTypes.string,
	children: PropTypes.node,
	onClick: PropTypes.func,
};

export default Button;
