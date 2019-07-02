'use strict';

const {promisify} = require('util');
const kleur = require('kleur');
const figlet = require('figlet');

const printTitle = promisify(figlet);

/**
 * All available colors as supported by kleur library.
 */

const availableColors = [
	'black',
	'red',
	'green',
	'yellow',
	'blue',
	'magenta',
	'cyan',
	'white',
	'gray',
	'grey'
];

/**
 * @param {String} title - Name of the utility
 * @param {String} [titleColor] - A suitable color of choice
 *
 * returns {void}
 */
const init = (title, titleColor) => {
	/**
	 * Clears the terminal screen.
	 */
	process.stdout.write('\u001B[2J\u001B[0;0f');

	if (typeof title === 'undefined' || title === '') {
		throw new Error('The argument title is required.');
	}

	if (availableColors.indexOf(titleColor) === -1) {
		throw new RangeError('Title color out of range.');
	}

	/**
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
};

/**
 * @param {String} title - Name of the utility
 * @param {String} [tagLine] - A suitable tagline
 * @param {String} [titleColor] - A suitable title-color of choice
 *
 * returns {void}
 */
const showBanner = async (title, tagLine, titleColor = 'red') => {
	/**
	 * Initialize script.
	 */
	init(title, titleColor);

	try {
		const data = await printTitle(title);
		console.log(kleur.bold()[titleColor](data));

		/**
		 * TagLine is optional.
		 */

		if (
			typeof tagLine !== 'undefined' &&
			tagLine !== '' &&
			tagLine.indexOf(' ') === -1
		) {
			console.log(' ' + kleur.bold().yellow(tagLine));
		}
	} catch (error) {
		throw error;
	}
};

module.exports = showBanner;
