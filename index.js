'use strict';

const { promisify } = require('util');
const kleur = require('kleur');
const figlet = require('figlet');

const printTitle = promisify(figlet);

/*
* All available colors as supported by kleur library.
*/

const availableColors = ['black', 'red', 'green', 'yellow', 'blue','magenta', 'cyan','white' , 'gray', 'grey'];

/* 
* Default values for font colors.
*/
const defaultOptions = {
	'titleColor': 'red',
	'tagLineColor': 'yellow'
};


const showBanner = async (title, tagLine, options) => {
	/*
	* Clears the terminal screen.
	*/
	process.stdout.write('\u001B[2J\u001B[0;0f');

	if (
		typeof title === 'undefined' ||
		title === ''
	) {
		throw new Error('The argument title is required.');
	}

	options = typeof options !== 'undefined' ? options : defaultOptions;

	/*
	* Convert the title to uppercase if it was provided in lower case.
	* It's just a convention to have the CLI capitalized.
	*/

	if (title.toLowerCase().includes('cli') && title === title.toLowerCase()) {
		const indexOfSeparator = title.indexOf('-');

		if (indexOfSeparator === -1) {
			title = title.charAt(0).toUpperCase() + title.substr(1, title.length);
		} else {
			title =
				title.charAt(0).toUpperCase() +
				title.substr(1, indexOfSeparator - 1) +
				' ' +
				title.substr(indexOfSeparator + 1, title.length).toUpperCase();
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
