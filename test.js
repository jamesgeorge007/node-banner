const assert = require('assert');
const showBanner = require('.');

describe('Normal usage', () => {
	it('Displays the banner', async () => {
		await showBanner('Title', 'This is the tagline');
	});
});

describe('No arguments are suppleid', () => {
	it('should fail', async () => {
		try {
			await showBanner();
		} catch (err) {
			assert(err);
		}
	});
});

describe('Only title is provided', () => {
	it('should fail', async () => {
		try {
			await showBanner('Title');
		} catch (err) {
			assert(err);
		}
	});
});

describe('Only tagline is provided', () => {
	it('should fail', async () => {
		try {
			await showBanner('', 'This is the tagline');
		} catch (err) {
			assert(err);
		}
	});
});