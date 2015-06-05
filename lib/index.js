'use strict';

// MODULES //

var copy = require( 'utils-copy' ),
	isArray = require( 'validate.io-array' ),
	isMatrix = require( 'validate.io-matrix'),
	isNumber = require( 'validate.io-number-primitive' ),
	matrix = require( 'dstructs-matrix' ),
	validate = require( './validate.js' );

// FUNCTIONS //

var iseven1 = require( './number.js' ),
	iseven2 = require( './array.js' ),
	iseven3 = require( './accessor.js' ),
	iseven4 = require( './matrix.js' );

// IS EVEN //

/**
* FUNCTION: iseven( x[, opts] )
*	Computes an element-wise is-even check.
*
* @param {Number|Number[]|Array} x - input value
* @param {Object} [opts] - function options
* @param {Boolean} [opts.copy=true] - boolean indicating if the function should return a new array
* @param {Function} [opts.accessor] - accessor function for accessing array values
* @returns {Number|Number[]|Null} output array or null
*/
function iseven( x, options ) {

	var opts,
		err,
		out;

	if ( isNumber( x ) ) {
		return iseven1( x );
	}

	if ( arguments.length > 1 ) {
		opts = copy( options );
		err = validate( opts );
		if ( err ) {
			throw err;
		}
	}
	if ( isArray( x ) ) {
		if ( !x.length ) {
			return null;
		}
		if ( opts && opts.copy ) {
			out = new Array( x.length );
		}
		else {
			out = x;
		}
 		if ( opts && opts.accessor ) {
			out = iseven3( out, x, opts.accessor );
		}
		else {
			out = iseven2( out, x );
		}
		return out;
	}

	if ( isMatrix( x ) ) {
		if ( opts && opts.copy === false ) {
			out = x;
		}
		else {
			out = matrix( x.shape, x.dtype );
		}
		out = iseven4( out, x );
		return out;
	}

	throw new TypeError( 'iseven()::invalid input argument. Input value type not currently supported. Value: `' + x + '`.' );

} // end FUNCTION iseven()


// EXPORTS //

module.exports = iseven;
