# node-banner

Easily integrate ASCII flavoured banners to your CLI tool.

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

![Demo](https://i.imgur.com/F36n434.png)

## Testing

```bash
 $ npm test
```

## License

[GNU GPL V3](https://github.com/jamesgeorge007/node-banner/blob/master/LICENSE)