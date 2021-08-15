const fs = require('fs');
const readline = require('readline');
const templateComponent = require('./templateComponent');
const templateStories = require('./templateStories');
const { camelize, checkName, getFolderName } = require('./utils');
const { LogType, print } = require('./logUtils');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

String.prototype.insert = function (insterBefore, string) {
	const splitedStr = this.split(insterBefore);
	const result = `${splitedStr[0]}${string}${insterBefore}${splitedStr[1]}`;
	return result;
};

const modifyList = (name, category, folderDir) => {
	const componentListPath = `./rollup.list.${category}.js`;
	const data = fs.readFileSync(componentListPath).toString();
	fs.writeFileSync(componentListPath, data.insert(`/* [end] export your ${category} */`, `${name}: '${folderDir}/${name}.jsx',\r\n\t\t`));
};

rl.question('Component Name(Upper camel case): ', componentName => {
	const name = checkName(componentName);
	rl.question('What kind of components are you adding [component(c) / util(u)] ?', type => {
		const category = getFolderName(type); // utils or components
		const folderDir = `./src/${category}/${camelize(name)}`;
		console.log('FolderDir', folderDir);
		try {
			fs.mkdirSync(folderDir);
		} catch {
			print('Folder Exist !', LogType.warning);
		}
		/* Create Component File */
		fs.writeFileSync(`${folderDir}/${name}.jsx`, templateComponent(name));
		/* Create Stories File */
		fs.writeFileSync(`${folderDir}/${name}.stories.jsx`, templateStories(name, category));
		/* Modify Component List for export */
		modifyList(name, category, folderDir);
		print('Successed !', LogType.success);
		rl.close();
	});
});
