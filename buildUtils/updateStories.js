const fs = require('fs');
const inquirer = require('inquirer');
const glob = require('glob');
const { camelizeUp, camelize } = require('./utils');
const { LogType, print } = require('./logUtils');

String.prototype.insert = function (insterBefore, string) {
	const splitedStr = this.split(insterBefore);
	const result = `${splitedStr[0]}${string}${insterBefore}${splitedStr[1]}`;
	return result;
};

// Update Stories
const questionUpdateStories = ({ category, files }) => {
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'componentName',
				message: 'Which stories would you like to update ?',
				choices: files.map(file => camelizeUp(file.split('/')[3])),
			},
		])
		.then(({ componentName }) => {
			/* 取得程式碼位置 */
			const commonPath = `./src/${category}/${camelize(componentName)}/${componentName}`;
			const storiesPath = `${commonPath}.stories.jsx`;
			print(`storiesPath: ${storiesPath}`, LogType.warning);
			const componentPath = `${commonPath}.jsx`;
			print(`componentPath: ${componentPath}`, LogType.warning);

			/* 讀取程式碼 */
			const data = fs.readFileSync(componentPath).toString();
			/* 尋找propTypes區塊 */
			const match = data.match(`${componentName}\.propTypes = {(.|\\s)*?};`);
			// console.log('propTypes區塊', match[0]);
			if (!match || match.length === 0) throw new Error('Can not found propTypes on your code !');
			const result = match[0].match(/\/\*\*(.|\s)*?\*\/|[a-z].*:\s*PropTypes.*,/g); // 分離出描述或PropTypes
			// console.log('result', result);
			/* 依據描述或PropTypes 產生argTypes的參數結果 */
			const results = [];
			let resultItem = {};
			result.forEach((item, i) => {
				if (i % 2) {
					// 奇數 - PropTypes
					resultItem.key = item.substring(0, item.indexOf(':'));
					resultItem.required = item.indexOf('isRequired') > -1;
					results.push(resultItem);
				} else {
					// 偶數 - 描述
					resultItem = {};
					resultItem.description = item
						.replace(new RegExp(/\/|\*|\t|\r|/gm), '') // 從 /** xxx */ 取出xxx
						.trim() // 去除前尾空白
						.replace(new RegExp(/\n/gi), ' ') // 把換行換成空格
						.replace(new RegExp(/\s\s+/g), ' '); // 把多個空格取代成一個
				}
			});
			// console.log('results', results);

			// 將參數寫入stories
			const anchorText = '/* component argTypes */';
			const code = fs.readFileSync(storiesPath).toString();
			const codeResults = code.split(anchorText);
			if (codeResults.length !== 3) throw new Error(`Cant foun ${anchorText} in '${storiesPath}'`);
			const tab = '\r\n\t';
			codeResults[1] = `${anchorText}${tab}${results
				.map(
					({ description, required, key }) =>
						`${key}: { description: '${description}'${required ? ', type: { required: true }' : ''} },`
				)
				.join(tab)}${tab}${anchorText}`;
			fs.writeFileSync(storiesPath, codeResults.join(''));
			print(`${storiesPath}has been updated !`, LogType.success);
		})
		.catch(error => print(error.message || error, LogType.error));
};

// Get stories category
const getCategory = () => {
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'category',
				message: 'What kind of components are you updating [component / util] ?',
				choices: ['components', 'utils'],
			},
		])
		.then(({ category }) => {
			const storiesRegExp = `./src/${category}/**/*.stories.*`;
			glob(storiesRegExp, (err, files) => {
				if (!Array.isArray(files) || files.length === 0) throw Error(`Can not found any file with regexp: ${storiesRegExp}`);
				questionUpdateStories({ category, files });
			});
		})
		.catch(error => print(error.message || error, LogType.error));
};

getCategory();
