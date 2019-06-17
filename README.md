# Go fuck yourself

Get random quotes to lower the ego of everyone or even yourself... In other works this package provides nothing. 

## Installation

```bash
$ npm install --save random-quotes
```

## Usage

NodeJS:

```js
const goFuckYourself = require('go-fuck-yourself');
```

Browsers:

```html
<script src="node_modules/go-fuck-yourself/dist/index.umd.min.js"></script>
```

```js
randomGoFuckYourSelfQuotes();
//  {
//    body: 'I'm sorry did I woll my eyes out loud? Go fuck yourself...',
//    author: '- Someone that hates you'
//  }
```

## API

- **`randomGoFuckYourSelfQuotes([count=1])`**
  - `count`: _Number_, _Optional_: The number of go fuck yourself quotes to get.
  - Returns a random go fuck yourself object with the following keys: `author`, `body`
  - When count is given, returns an array of random go fuck yourself quotes.

- **`randomGoFuckYourSelfQuotes.byAuthor(author)`**
  - `author`: _String_. The name of the fucker.
  - Returns an array of go fuck yourself quotes by the given fucker who wrote it. Array will contain the string bodies of the go fuck yourself quotes directly.

## License

MIT License
