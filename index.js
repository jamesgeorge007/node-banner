'use strict';

const {promisify} = require('util');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const readPkgUp = require('read-pkg-up');

const printTitle = promisify(figlet);

const fallBackCheck = async (text, field) => {
	const {package: pkg} = await readPkgUp({cwd: __dirname});
	if (
		(typeof text === 'undefined' || typeof text !== 'string' || text === '') &&
		Object.prototype.hasOwnProperty.call(pkg, field)
	) {
		text = pkg[field];
	}

	return text;
};

const showBanner = async (title, tagLine) => {
	clear();

	title = await fallBackCheck(title, 'name');
	tagLine = await fallBackCheck(tagLine, 'description');

	if (title === title.toLowerCase()) {
		const index = title.indexOf('-');

		if (!index === -1) {
			title =
				title.charAt(0).toUpperCase() +
				title.substr(1, index - 1) +
				' ' +
				title.substr(index + 1, title.length).toUpperCase();
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
