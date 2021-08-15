module.exports = {
	/* Fix first letter to lower case */
	camelize: str => str.replace(str[0], str[0].toLowerCase()),
	/* Check component name is legal */
	checkName: name => {
		if (name && name.match(/[A-Z].*/)) {
			return name;
		} else {
			print('[Error] Your component name need upper camel case !');
		}
	},
	/* Handle Component type for folder name */
	getFolderName: type => {
		if (['component', 'util', 'c', 'u'].includes(type)) {
			if (type === 'c') return 'components';
			if (type === 'u') return 'utils';
			return `${type}s`;
		} else {
			print('[Error] Type incorrect !');
		}
	},
};
