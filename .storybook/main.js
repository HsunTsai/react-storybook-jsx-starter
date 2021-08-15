module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		// add
		'@storybook/preset-scss',
		'@storybook/addon-notes',
	],
	// addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

	// 調整打包成DemoPage時 含有prefix、contextRoot 用於部屬伺服器時
	// webpackFinal: async (config, { configType }) => {
	// 	config.output.publicPath = '/components/';
	// 	return config;
	// },
	// managerWebpack: async config => {
	// 	config.output.publicPath = '/components/';
	// 	return config;
	// },
};
