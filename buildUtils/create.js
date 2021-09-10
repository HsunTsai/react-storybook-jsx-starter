const fs = require('fs');
const inquirer = require('inquirer');
const templateComponent = require('./templateComponent');
const templateUtils = require('./templateUtils');
const templateStories = require('./templateStories');
const { camelize, camelizeUp } = require('./utils');
const { LogType, print } = require('./logUtils');

String.prototype.insert = function (insterBefore, string) {
	const splitedStr = this.split(insterBefore);
	const result = `${splitedStr[0]}${string}${insterBefore}${splitedStr[1]}`;
	return result;
};

const modifyList = (name, category, componentFile) => {
	const componentListPath = `./rollup.list.${category}.js`;
	const data = fs.readFileSync(componentListPath).toString();
	fs.writeFileSync(componentListPath, data.insert(`/* [end] export your ${category} */`, `${name}: '${componentFile}',\r\n\t`));
};

inquirer
	.prompt([
		{ type: 'input', name: 'componentName', message: 'Component Name: ' },
		{
			type: 'list',
			name: 'category',
			message: 'What kind of components are you adding [component / util] ?',
			choices: ['components', 'utils'],
		},
	])
	.then(({ componentName, category }) => {
		const folderDir = `./src/${category}/${camelize(componentName)}`;
		console.log('FolderDir', folderDir);
		try {
			fs.mkdirSync(folderDir);
		} catch {
			print('Folder Exist !', LogType.warning);
		}

		const isUtils = category === 'utils';
		const name = isUtils ? camelize(componentName) : camelizeUp(componentName);
		/* Create Component File */
		const componentFile = `${folderDir}/${name}.${isUtils ? 'js' : 'jsx'}`;
		fs.writeFileSync(componentFile, isUtils ? templateUtils(name) : templateComponent(name));
		/* Create Stories File */
		fs.writeFileSync(`${folderDir}/${name}.stories.jsx`, templateStories(name, category));
		/* Modify Component List for export */
		modifyList(name, category, componentFile);
		print('Successed !', LogType.success);
	})
	.catch(error => print(error.message || error, LogType.error));
