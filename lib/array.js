'use strict';

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
		i,
		val;

	for ( i = 0; i < len; i++ ) {
		val = x[ i ];
		y[ i ] = ( val % 2 === 0 ) ? 1 : 0;
	}

	return y;
} // end FUNCTION iseven()


// EXPORTS //

module.exports = iseven;
