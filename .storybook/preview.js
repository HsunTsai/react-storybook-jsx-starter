import DocPage from './docPage/DocPage';
import badgesConfig from './badges/badgesConfig';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	viewMode: 'docs',
	previewTabs: {
		// 'storybook/docs/panel': { index: -1 },
		canvas: { hidden: true },
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	docs: { page: DocPage },
	badgesConfig,
};
