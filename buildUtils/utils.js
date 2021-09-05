module.exports = {
	/* Fix first letter to lower case */
	camelize: str => str.replace(str[0], str[0].toLowerCase()),
	/* Fix first letter to upper case */
	camelizeUp: str => str.replace(str[0], str[0].toUpperCase()),
	/* Check component name is legal */
	checkName: name => {
		if (name && name.match(/[A-Z].*/)) {
			return name;
		} else {
			print('[Error] Your component name need upper camel case !');
		}
	},
};
