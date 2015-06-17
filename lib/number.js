'use strict';

// IS EVEN //

/**
* FUNCTION: iseven( x )
*	Checks whether input element is an even number.
*
* @private
* @param {Number} x - input value
* @returns {Number} 1 if element is even, 0 otherwise
*/
function iseven( x ) {
	return ( x % 2 === 0 ) ? 1 : 0;
} // end FUNCTION iseven()

// EXPORTS //

module.exports = iseven;
