/**
 * 透過元件清單(rollup.components)
 * 建立index
 * 提供打包後的元件引入
 */

const fs = require('fs');
const path = require('path');
// import rollupInputList from './rollupInputList';
const components = require('./rollup.list.components');
const utils = require('./rollup.list.utils');

const indexCreator = (dirPath, data) =>
	['index.d.ts', 'index.js'].forEach(fileName => {
		fs.writeFileSync(path.join(dirPath, fileName), data);
	});

let data = '';
const dirPath = path.join(__dirname, './lib');
// export components
Object.keys(components).forEach(key => (data = data.concat(`export { default as ${key} } from './components/${key}';\n`)));
// export utils
Object.keys(utils).forEach(key => (data = data.concat(`\nexport { default as ${key} } from './utils/${key}';`)));

indexCreator(dirPath, data);
