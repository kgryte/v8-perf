#!/usr/bin/env node

// MODULES //

var fs = require( 'fs' ),
	path = require( 'path' );


// VARIABLES //

var dir = path.resolve( __dirname, '../tests' );


// TESTS //

var files = fs.readdirSync( dir ),
	regexp = /^test\d+\.js?/,
	tests;

files = files.filter( function filter( filename ) {
	return regexp.test( filename );
});

tests = new Array( files.length );
for ( var i = 0; i < files.length; i++ ) {
	tests[ i ] = require( path.join( dir, files[i] ) );
}


// RUN //

for ( var i = 0; i < tests.length; i++ ) {
	tests[i]();
}