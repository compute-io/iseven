'use strict';

// MODULES //

var ISEVEN = require( './number.js' );

// IS EVEN //

/**
* FUNCTION: iseven( out, arr )
*	Computes for each matrix element whether it is an even number.
*
* @private
* @param {Matrix} out - output matrix
* @param {Matrix} arr - input matrix
* @returns {Matrix} output matrix
*/
function iseven( y, x ) {
	var out = y,
		len,
		i;

	x = x.data;
	y = y.data;
	len = x.length;
	for ( i = 0; i < len; i++ ) {
		y[ i ] = ISEVEN( x[ i ] );
	}
	return out;
} // end FUNCTION iseven()


// EXPORTS //

module.exports = iseven;
