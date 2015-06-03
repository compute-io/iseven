/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	iseven = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-iseven', function tests() {

	it( 'should export a function', function test() {
		expect( iseven ).to.be.a( 'function' );
	});

	it( 'should do something' );

});
