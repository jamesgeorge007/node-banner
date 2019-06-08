'use strict';

const {promisify} = require('util');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const printTitle = promisify(figlet);

const showBanner = async (title, tagLine) => {
	clear();

	if (
		typeof title === 'undefined' ||
		typeof tagLine === 'undefined' ||
		title === '' ||
		tagLine === ''
	) {
		throw new Error('showBanner() expects to have both the arguments.');
	}

	if (title === title.toLowerCase()) {
		const indexOfSeparator = title.indexOf('-');

		if (!indexOfSeparator === -1) {
			title =
				title.charAt(0).toUpperCase() +
				title.substr(1, indexOfSeparator - 1) +
				' ' +
				title.substr(indexOfSeparator + 1, title.length).toUpperCase();
		} else {
			title = title.charAt(0).toUpperCase() + title.substr(1, title.length);
		}
	}

	try {
		const data = await printTitle(title);
		console.log(chalk.bold.red(data));
		console.log(chalk.bold.yellow(' ' + tagLine));
	} catch (error) {
		throw error;
	}
};

module.exports = showBanner;
