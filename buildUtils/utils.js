module.exports = {
	/* Fix first letter to lower case */
	camelize: str => str.replace(str[0], str[0].toLowerCase()),
	/* Fix first letter to upper case */
	camelizeUp: str => str.replace(str[0], str[0].toUpperCase()),
};
