'use strict';

// IS EVEN //

/**
* FUNCTION: iseven( out, arr, accessor )
*	Computes for each array element whether it is even using an accessor function.
*
* @@private
* @param {Array} out - output array
* @param {Array} arr - input array
* @param {Function} accessor - accessor function for accessing array values
* @returns {Array} output array
*/
function iseven( y, x, clbk ) {
	var len = x.length,
		i,
		val;

	for ( i = 0; i < len; i++ ) {
		val = clbk( x[ i ], i );
		y[ i ] = ( val % 2 === 0 ) ? 1 : 0;
	}

	return y;
} // end FUNCTION iseven()


// EXPORTS //

module.exports = iseven;
