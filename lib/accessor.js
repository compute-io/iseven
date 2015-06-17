'use strict';

// MODULES //

var ISEVEN = require( './number.js' );

// IS EVEN //

/**
* FUNCTION: iseven( out, arr, accessor )
*	Computes for each array element whether it is even using an accessor function.
*
* @private
* @param {Array} out - output array
* @param {Array} arr - input array
* @param {Function} accessor - accessor function for accessing array values
* @returns {Array} output array
*/
function iseven( y, x, clbk ) {
	var len = x.length,
		i;

	for ( i = 0; i < len; i++ ) {
		y[ i ] = ISEVEN( clbk( x[ i ], i ) );
	}

	return y;
} // end FUNCTION iseven()


// EXPORTS //

module.exports = iseven;
