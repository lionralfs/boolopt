# boolopt (boolean options)

[![Greenkeeper badge](https://badges.greenkeeper.io/lionralfs/boolopt.svg)](https://greenkeeper.io/)

A tiny package to get and set boolean options using bitwise operations.

## Installation

```bash
npm install --save boolopt
```

## Usage

Calling boolopt returns an object with the methods `get` and `set` on it.

```js
import boolopt from "boolopt";

// initialize the values (omitting them sets them to 0)
const { get, set } = boolopt(false, false, true);

// you can now access them by index
get(0); // false
get(1); // false
get(2); // true

set(1, true);

get(1); // true
```

It combines nicely with enums:

```js
const OPTIONS = Object.freeze({ HUNGRY: 0, TIRED: 1 });

const { get, set } = boolopt();

set(OPTIONS.HUNGRY, true);
set(OPTIONS.TIRED, true);
```

## License

[MIT](LICENSE) © Lion Ralfs
