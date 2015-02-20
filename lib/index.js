/**
*
*	VALIDATE: uppercase
*
*
*	DESCRIPTION:
*		- Validates if a value is an uppercase string.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isString = require( 'validate.io-string' );


// ISUPPERCASE //

/**
* FUNCTION: isUppercase( value )
*	Validates if a value is an uppercase string.
*
* @param {String} value - value to be validated
* @returns {Boolean} boolean indicating whether value is an uppercase string
*/
function isUppercase( value ) {
	return isString( value ) && ( value.valueOf() === value.toUpperCase() );
} // end FUNCTION isUppercase()


// EXPORTS //

module.exports = isUppercase;
