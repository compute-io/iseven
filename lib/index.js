'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isNumber = require( 'validate.io-number');

// FUNCTIONS //

// any private utility functions go here...



// ISEVEN //

/**
* FUNCTION: iseven( arr )
*	Computes for each array element whether an element is even.
*
* @param {Array} arr - input array
* @param {Array} array of 1s and 0s indicating if an element iseven
*/
function iseven( arr ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'iseven()::invalid input argument. Must provide an array.' );
	}
	var len = arr.length,
		out = new Array( len ),
		val;

	for ( var i = 0; i < len; i++ ) {
		out[ i ] = 0;
		val = arr[ i ];
		if ( isNumber( val ) && ( val % 2 === 0 ) ) {
			out[ i ] = 1;
		}
	}
	return out;
} // end FUNCTION iseven()


// EXPORTS //

module.exports = iseven;
