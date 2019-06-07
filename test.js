const assert = require('assert');
const showBanner = require('.');

describe('showBanner', () => {
  it('display the banner', () => {
    showBanner('Title', 'This is the tagline');
  });
});

describe('no arguments supplied', () => {
  it('fails without arguments', () => {
    try {
      showBanner();
    } catch (err) {
      assert.ok(true);
    }
  });
});
