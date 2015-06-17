'use strict';

// MODULES //

var ISEVEN = require( './number.js' );

// IS EVEN //

/**
* FUNCTION: iseven( out, arr )
*	Computes for each array element whether it is an even number.
*
* @private
* @param {Array} out - output array
* @param {Array} arr - input array
* @returns {Array} output array
*/
function iseven( y, x ) {
	var len = x.length,
		i;

	for ( i = 0; i < len; i++ ) {
		y[ i ] = ISEVEN( x[ i ] );
	}

	return y;
} // end FUNCTION iseven()


// EXPORTS //

module.exports = iseven;
