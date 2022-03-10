const isDev = process.env.NODE_ENV === 'development';
const publicPath = isDev ? '/' : '/components';

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		// add
		'@storybook/preset-scss', // Support Scss
		'@storybook/addon-notes', // Show Note Tab (Toolbar)
		'@geometricpanda/storybook-addon-badges', // Show Component Tag (Toolbar)
	],
	staticDirs: [{ from: '../src/data', to: '/data' }],

	// 調整打包成DemoPage時 含有prefix、contextRoot 用於部屬伺服器時
	webpackFinal: async (config, { configType }) => {
		config.output.publicPath = publicPath;
		return config;
	},
	managerWebpack: async config => {
		config.output.publicPath = publicPath;
		return config;
	},
};
