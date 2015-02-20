'use strict';

var isUppercase = require( './../lib' );

console.log( isUppercase( 'HELLO' ) );
// returns true

console.log( isUppercase( 'Hello' ) );
// returns false