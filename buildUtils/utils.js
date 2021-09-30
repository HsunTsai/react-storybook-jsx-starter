module.exports = {
	/* Fix first letter to lower case */
	camelize: str => str.replace(str[0], str[0].toLowerCase()),
	/* Fix first letter to upper case */
	camelizeUp: str => str.replace(str[0], str[0].toUpperCase()),
	/* Object parse to string like code*/
	jsonParser: data =>
		JSON.stringify(data, null, 1) // stringify, with line-breaks and indents
			.replace(/^ +/gm, ' ') // remove all but the first space for each line
			.replace(/\n/g, '') // remove line-breaks
			.replace(/{/g, '{')
			.replace(/}/g, '}') // remove spaces between object-braces and first/last props
			.replace(/\[/g, '[')
			.replace(/ \]/g, ']') // remove spaces between array-brackets and first/last items
			.replace(/"([^"]+)":/g, '$1:') // remove key quotes
			.replace(/\"/g, "'")
			.replace(/}(?!.*})/, ' }'),
};
