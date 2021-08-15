const webpack = require('webpack');

module.exports = ({ config }) => {
	config.module.rules.push({
		enforce: 'pre',
		test: /\.(js|jsx)$/,
		include: /src/,
		use: ['babel-loader', 'eslint-loader'],
	});

	config.plugins.push(
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify('development') },
		})
	);

	return config;
};
