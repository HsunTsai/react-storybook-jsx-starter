const LogType = {
	error: 'error',
	success: 'success',
	warning: 'warning',
};
const logStyle = {
	[LogType.error]: `\x1b[31m%s\x1b[0m`,
	[LogType.success]: `\x1b[32m%s\x1b[0m`,
	[LogType.warning]: `\x1b[33m%s\x1b[0m`,
};

module.exports = {
	LogType,
	print: (message, type = LogType.error) => {
		console.log(logStyle[type], message);
		process.exit(0);
	},
};
