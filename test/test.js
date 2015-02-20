/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isUppercase = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-uppercase', function tests() {

	it( 'should export a function', function test() {
		expect( isUppercase ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isUppercase( 'HELLO' ) );
		assert.ok( isUppercase( new String( 'HELLO' ) ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			[],
			true,
			function(){},
			null,
			{},
			NaN,
			'Hello',
			'hello',
			undefined
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isUppercase( values[i] ) );
		}
	});

});
