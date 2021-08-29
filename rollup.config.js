import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import image from 'rollup-plugin-img';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cleaner from 'rollup-plugin-cleaner';
import { terser } from 'rollup-plugin-terser';

const components = require('./rollup.list.components');
const utils = require('./rollup.list.utils');

// External dependency
const external = ['react', 'react-dom', 'react-proptypes'];

// Plugins
const plugins = [
	image(),
	resolve({ extensions: ['.js', '.jsx', '.json'] }), // browser: true,
	postcss({ extensions: ['.css', '.scss'], plugins: [autoprefixer()] }),
	replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
	babel({ include: 'src/**', runtimeHelpers: true, exclude: 'node_modules/**' }),
	commonjs({
		include: 'node_modules/**',
		namedExports: {
			'node_modules/react/index.js': [
				'Children',
				'ReactComponent',
				'PureComponent',
				'FunctionComponent',
				'Component',
				'PropTypes',
				'createElement',
			],
			'node_modules/react-dom/index.js': ['render'],
		},
	}),
	terser(), // minify code
];

export default [
	// deploy utils
	{
		input: Object.keys(utils).map(key => utils[key]),
		treeshake: true, // remove reduntand code
		output: { dir: 'lib/utils' }, // output location, other config => sourcemap: true
		external,
		plugins: [cleaner({ targets: ['./lib/'] }), ...plugins], // Clean lib folder first
	},
	// deploy components
	{
		input: Object.keys(components).map(key => components[key]),
		treeshake: true, // remove reduntand code
		output: { dir: 'lib/components' }, // output location
		external,
		plugins,
	},
];
