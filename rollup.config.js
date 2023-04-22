import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cleaner from 'rollup-plugin-cleaner';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';

const packageJson = require('./package.json');
const components = require('./rollup.list.components');
const utils = require('./rollup.list.utils');

// External dependency
const external = ['react', 'react-dom', 'prop-types'];

// Plugins
const plugins = [
	image(),
	json(),
	nodeResolve({ extensions: ['.js', '.jsx', '.json'], preferBuiltins: false, browser: true }),
	postcss({ extensions: ['.css', '.scss'], plugins: [autoprefixer()] }),
	replace({
		'process.env.NODE_ENV': JSON.stringify('production'),
		'process.env.VERSION': JSON.stringify(packageJson.version + packageJson.build),
		preventAssignment: true,
	}),
	babel({ include: 'src/**', babelHelpers: 'bundled', exclude: 'node_modules/**', sourceMaps: false }),
	commonjs(),
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
