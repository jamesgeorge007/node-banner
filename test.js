const assert = require('assert');
const showBanner = require('.');

describe('Normal usage', () => {
	it('Displays the banner', async () => {
		await showBanner('Title', 'This is the tagline');
		assert.ok('Works out of the box');
	});
});

describe('No arguments are suppleid', () => {
	it('should fail', async () => {
		try {
			await showBanner();
		} catch (err) {
			assert.equal(err, "Error: The argument title is required.");
		}
	});
});

describe('Only title is provided', () => {
	it('should work fine', async () => {
		await showBanner('Title');
		assert.ok('tagLine is optional');
	});
});

describe('Only tagline is provided', () => {
	it('should fail', async () => {
		try {
			await showBanner('', 'This is the tagline');
		} catch (err) {
			assert.equal(err, "Error: The argument title is required.");
		}
	});
});

describe('Customized title color', () => {
	it('should work absolutely fine', async () => {
		await showBanner('Title', '', 'magenta');
		assert.ok('tagLine is optional');
	});
});

describe('Ignores empty tagLine', () => {
	it('avoids the tagline', async () => {
		await showBanner('Title', ' ', 'blue');
		assert.ok('whitespaces are ignored');
	});
});

describe('Throws an error for out of range titleColor', () => {
	it('it should fail', async () => {
		try {
			await showBanner('Title', '', 'purple');
		} catch (err) {
			assert.equal(err, 'RangeError: Title color out of range.');
		}
	});
});

describe('All arguments are provided', () => {
	it('should work absolutely fine', async () => {
		await showBanner('Title', 'This is the tagline', 'blue');
		assert.ok('Everything perfect');
	});
});

describe('Random-CLI', () => {
	it('capitalizes cli', async () => {
		await showBanner('random-cli');
		assert.ok('Everything perfect');
	});
});