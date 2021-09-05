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
	/** 輸入的文字 */
	text: PropTypes.string,
	/** 按鈕的大小 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/** 按鈕顏色 */
	color: PropTypes.string,
	/** 按鈕內容 */
	children: PropTypes.node,
	/** 點擊後的返回 */
	onClick: PropTypes.func,
};

export default Button;
