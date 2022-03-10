import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Title, Subtitle, Description } from '@storybook/addon-docs/blocks';
import { Story, StoryTable, Source, CURRENT_SELECTION } from '@storybook/addon-docs/blocks';

import './docPage.scss';

const DocPage = () => {
	const { id } = queryString.parse(window.location.search);
	const path = id?.split('-'); // ex:  components-button--custom => ['components', 'button', '', 'custom']
	const { 1: name, 3: variant } = path || [];

	const [loading, setLoading] = useState(true);
	const [showCode, setShowCode] = useState();

	useEffect(() => {
		setLoading(true);
		setTimeout(() => setLoading(), 100);
	}, [variant]);

	return (
		!loading && (
			<div className="docPage">
				<Title />
				<Subtitle />
				<Description />
				<div className="docPage__story">
					<div className="docPage__story__component">
						<Story id={CURRENT_SELECTION} />
					</div>
					<div className="docPage__story__show-code"onClick={() => setShowCode(!showCode)}>{`${showCode ? 'Hide' : 'Show'} Code`}</div>
				</div>
				{showCode && <Source />}
				<div className="docPage__story__table">
					<div className="docPage__story__table__hint">註: 若參數未同步 請先Reset 👇</div>
					<StoryTable story={CURRENT_SELECTION} sort="requiredFirst" exclude={['children']} />
				</div>
				{/* <Stories /> */}
			</div>
		)
	);
};

DocPage.propTypes = {};

export default DocPage;
