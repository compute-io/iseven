iseven
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

>  Computes element-wise whether a value is an even number.

## Installation

``` bash
$ npm install compute-iseven
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isEven = require( 'compute-iseven' );
```

#### iseven( x[, options] )

Checks element-wise whether numbers in `x` are even. `x` may be either a [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or a [`matrix`](https://github.com/dstructs/matrix). Correspondingly, the function returns either a single number, an `array` with length equal to that of the input `array` or a `matrix` with equal dimensions as input `x`. Each output element is either `0` or `1`. A value of `1` means that an element is an even number and `0` means that an element is __not__ an even number.

``` javascript
var out = isEven( 9 );
// returns 0

out = isEven( [ 1, 2, 3 ] );
// returns [ 0, 1, 1 ]
```

When provided an input `array`, the function accepts two `options`:

*  __copy__: `boolean` indicating whether to return a new `array` containing 0/1's indicating whether the corresponding element is an even number. Default: `true`.
*  __accessor__: accessor `function` for accessing numeric values in object `arrays`.

To mutate the input `array` (e.g., when input values can be discarded or when optimizing memory usage), set the `copy` option to `false`.

``` javascript
var arr = [ 1, 2, 3 ];

var out = isEven( arr, {
	'copy': false
});
// returns [ 0, 1, 0 ]

console.log( arr === out );
// returns true
```

For object `arrays`, provide an accessor `function` for accessing `array` values.

``` javascript
var data = [
	['beep', 1],
	['boop', 2],
	['bip', 3],
	['bap', 4],
	['baz', 5]
];

function getValue( d, i ) {
	return d[ 1 ];
}

var out = isEven( data, {
	'accessor': getValue
});
// returns [ 0, 1, 0, 1, 0 ]
```

In the case of matrices, the function returns an indicator matrix with the same dimensions as `x`:

```javascript
var matrix = require( 'dstructs-matrix' ),
	data,
	mat,
	out;

data = new Float64Array( 9 );
for ( i = 0; i < 9; i++ ) {
	data[ i ] = i + 1;
}
mat = matrix( data, [3,3], 'float64' );
/*
	[ 1 2 3
	  4 5 6
	  7 8 9 ]
*/

out = isEven( mat );
/*
	[ 0 1 0
	  1 0 1
	  0 1 0 ]
*/
```

## Examples

``` javascript
var isEven = require( 'compute-iseven' );

console.log( isEven( 3 ) );
// returns 0

console.log( isEven( [ 1, 2, 3, 4] ) );
// returns [ 0, 1, 0, 1 ]
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The Compute.io Authors.


[npm-image]: http://img.shields.io/npm/v/compute-iseven.svg
[npm-url]: https://npmjs.org/package/compute-iseven

[travis-image]: http://img.shields.io/travis/compute-io/iseven/master.svg
[travis-url]: https://travis-ci.org/compute-io/iseven

[coveralls-image]: https://img.shields.io/coveralls/compute-io/iseven/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/iseven?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/iseven.svg
[dependencies-url]: https://david-dm.org/compute-io/iseven

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/iseven.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/iseven

[github-issues-image]: http://img.shields.io/github/issues/compute-io/iseven.svg
[github-issues-url]: https://github.com/compute-io/iseven/issues
