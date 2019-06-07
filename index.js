'use strict';

const {promisify} = require('util');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const printTitle = promisify(figlet);

const showBanner = async (title, tagLine) => {
	clear();

	const pJSON = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'package.json')).toString());
	if (typeof tagLine === 'undefined' && Object.prototype.hasOwnProperty.call(pJSON, 'description')) {
		tagLine = pJSON.description;
	}

	try {
		const data = await printTitle(title);
		console.log(chalk.redBright(data));
		console.log(chalk.yellow(' ' + tagLine));
	} catch (error) {
		throw error;
	}
};

module.exports = showBanner;
