# random-quotes

Get random quotes to lower the ego of everyone or even yourself... In other works this package provides nothing. 

## Installation

```bash
$ npm install --save random-quotes
```

## Usage

NodeJS:

```js
const randomQuotes = require('go-fuck-yourself');
```

Browsers:

```html
<script src="node_modules/go-fuck-yourself/dist/index.umd.min.js"></script>
```

```js
randomQuotes();
//  {
//    body: 'It\'s not poisonous...',
//    author: 'Famous Last Words'
//  }
```

## API

- **`randomQuotes([count=1])`**
  - `count`: _Number_, _Optional_: The number of go fuck yourself quotes to get.
  - Returns a random go fuck yourself object with the following keys: `author`, `body`
  - When count is given, returns an array of random go fuck yourself quotes.

- **`randomQuotes.byAuthor(author)`**
  - `author`: _String_. The name of the fucker.
  - Returns an array of go fuck yourself quotes by the given fucker who wrote it. Array will contain the string bodies of the go fuck yourself quotes directly.

## License

MIT License
