#!/usr/bin/env node

// TESTS //

var tests = [
		require( './test1.js' ),
		require( './test2.js' ),
		require( './test3.js' ),
		require( './test4.js' ),
		require( './test5.js' ),
		require( './test6.js' )
	];


// RUN //

for ( var i = 0; i < tests.length; i++ ) {
	tests[i]();
}