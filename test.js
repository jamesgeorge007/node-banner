const showBanner = require('.');

describe('Normal usage', () => {
	it('Displays the banner', async () => {
		await showBanner('Title', 'This is the tagline');
	});
});

describe('Only title is supplied', () => {
	it('Fetch tagline content from package.json', async () => {
		await showBanner('Title');
	});
});

describe('Only title is supplied leaving the tagline empty', () => {
	it('Fetch tagline content from package.json', async () => {
		await showBanner('Title', '');
	});
});

describe('Only tagline is supplied leaving the title empty', () => {
	it('Fetch title content from package.json', async () => {
		await showBanner('', 'Tagline');
	});
});

describe('No arguments supplied', () => {
	it('Fetch details from package.json', async () => {
		await showBanner();
	});
});

describe('Argument of type Number is provided', () => {
	it('Fetch details from package.json', async () => {
		await showBanner(1);
	});
});
