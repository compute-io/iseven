/* global require, describe, it */
'use strict';

// MODULES //

var matrix = require( 'dstructs-matrix' );

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isEven = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-iseven', function tests() {

	it( 'should throw an error if provided an invalid input type', function test() {
		var values = [
				// '5', // Strings are Array-like
				{},
				true,
				null,
				undefined,
				NaN,
				function(){}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				isEven( value );
			};
		}
	});


	it( 'should export a function', function test() {
		expect( isEven ).to.be.a( 'function' );
	});

	it( 'should throw an error if `options` is not an object', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				isEven( [1,2,3,4,5], value );
			};
		}
	});

	it( 'should throw an error if provided an accessor which is not a function', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				isEven( [1,2,3,4,5], {'accessor': value} );
			};
		}
	});

	it( 'should throw an error if provided a copy option which is not a boolean', function test() {
		var values = [
			'5',
			5,
			function(){},
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				isEven( [1,2,3,4,5], {'copy': value} );
			};
		}
	});

	it( 'should check whether a single number is even', function test() {

		assert.ok( isEven( 2 ) === 1 );
		assert.ok( isEven( 3 ) === 0 );

	});

	it( 'should check whether elements in array are even numbers', function test() {
		var data, expected, results;

		data = [ 2, 4, 5, 3, 8, 2 ];
		expected = [ 1, 1, 0, 0, 1, 1 ];

		results = isEven( data );

		assert.strictEqual( results.length, expected.length );
		assert.deepEqual( results, expected );
	});

	it( 'should check whether elements in a matrix are even numbers', function test() {
		var data, expected, results;

		data = matrix( new Int8Array( [ 2, 4, 5, 3] ), [2,2] );
		results = isEven( data );

		expected = '1,1;0,0';

		assert.strictEqual( results.toString(), expected );
	});

	it( 'should check whether elements in array are even numbers using an accessor', function test() {
		var data, expected, actual;

		data = [
			{'x':2},
			{'x':4},
			{'x':5},
			{'x':3},
			{'x':8},
			{'x':2}
		];

		actual = isEven( data, {'accessor': getValue} );
		expected = [ 1, 1, 0, 0, 1, 1 ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should check whether elements in array are even and mutate the input array', function test() {
		var data, expected, results;

		data = [ 2, 4, 5, 3, 8, 2 ];
		expected = [ 1, 1, 0, 0, 1, 1 ];

		results = isEven( data, {'copy': false} );

		assert.strictEqual( results.length, expected.length );
		assert.deepEqual( results, expected );
		assert.ok( results === data );
	});

	it( 'should check whether elements in a matrix are even and mutate the input array', function test() {
		var data, expected, results;

		data = matrix( new Int8Array( [ 2, 4, 5, 3] ), [2,2] );
		expected = matrix( new Int8Array( [1, 1, 0, 0] ), [2,2] );

		results = isEven( data, {'copy': false} );

		assert.strictEqual( results.length, expected.length );
		assert.deepEqual( results, expected );
		assert.ok( results === data );
	});

	it( 'should check whether elements in array are even using an accessor and mutate the input array', function test() {
		var data, expected, actual;

		data = [
			{'x':2},
			{'x':4},
			{'x':5},
			{'x':3},
			{'x':8},
			{'x':2}
		];

		actual = isEven( data, {'accessor': getValue, 'copy':false} );
		expected = [ 1, 1, 0, 0, 1, 1 ];
		assert.ok( actual === data );

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});


	it( 'should return null if provided an empty array', function test() {
		assert.isNull( isEven( [] ) );
	});


});
