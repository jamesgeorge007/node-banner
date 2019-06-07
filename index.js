'use strict';

const {promisify} = require('util');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const printTitle = promisify(figlet);

const fallBackCheck = (text, field) => {
	const pJSON = JSON.parse(
		fs.readFileSync(path.resolve(process.cwd(), 'package.json')).toString()
	);

	if (
		(typeof text === 'undefined' || typeof text !== 'string' || text === '') &&
		Object.prototype.hasOwnProperty.call(pJSON, field)
	) {
		text = pJSON[field];
	}

	return text;
};

const showBanner = async (title, tagLine) => {
	clear();

	title = fallBackCheck(title, 'name');
	tagLine = fallBackCheck(tagLine, 'description');

	try {
		const data = await printTitle(title);
		console.log(chalk.bold.red(data));
		console.log(chalk.bold.yellow(' ' + tagLine));
	} catch (error) {
		throw error;
	}
};

module.exports = showBanner;
