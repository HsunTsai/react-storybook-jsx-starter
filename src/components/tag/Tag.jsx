import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './tag.scss';

const Tag = ({ className, tags }) => (
	<div className={classNames('tag', className)}>
		{(Array.isArray(tags) ? tags : []).map((tag, i) => (
			<span className="tag__item" key={i.toString()}>
				{tag}
			</span>
		))}
	</div>
);

Tag.defaultProps = {
	className: undefined,
	tags: undefined,
};

/* Write props detail information and 'npm run updateStory' will help you generate stories's argTypes */
Tag.propTypes = {
	/** Css Name */
	className: PropTypes.string,
	/** Tag List */
	tags: PropTypes.arrayOf(PropTypes.any),
};

export default Tag;
