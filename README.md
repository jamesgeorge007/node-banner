[![Build Status](https://travis-ci.com/jamesgeorge007/node-banner.svg?branch=master)](https://travis-ci.com/jamesgeorge007/node-banner)

<p align="center">
	<img src="https://i.imgur.com/9CVBorr.png" alt="node-banner">
</p>

Easily integrate ASCII flavoured banner to your CLI utility.

## Usage

```md
$ npm install --save node-banner
```

```js
const showBanner = require('node-banner');

(async () => {
	await showBanner('The Title', 'This is a suitable tagline');
})();

```

![Demo](https://i.imgur.com/btVf53N.png)

## API

### showBanner(title, tagLine?)

- title: Name of the utility.
- tagLine(optional): A suitable tagline.

> Fetches the respective details from `package.json` if none was provided.

## Testing

```bash
 $ npm test
```

## License

[GNU GPL V3](https://github.com/jamesgeorge007/node-banner/blob/master/LICENSE)