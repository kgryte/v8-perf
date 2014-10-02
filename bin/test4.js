(function(){
	'use strict';

	// FUNCTIONS //

	/**
	* FUNCTION: add( a, b )
	*	Adds two numbers.
	*
	* @private
	* @param {Number} a
	* @param {Number} b
	* @returns {Number} sum
	*/
	function add( a, b ) {
		return a + b;
	}


	// TEST //

	/**
	* FUNCTION: test()
	*	Measures the average operation time executing a single loop of a FOR loop involving floating point addition of two random numbers.
	*/
	function test() {
		var total = 1e9,
			x,
			start,
			i,
			diff,
			elapsed;

		start = process.hrtime();
		for ( i = 0; i < total; i++ ) {
			x = add( Math.random(), Math.random() );
		}
		diff = process.hrtime( start );

		elapsed = diff[ 0 ]*1e9 + diff[ 1 ];

		console.log( '===' );
		console.log( 'FOR LOOP: addition of random numbers...' );
		console.log( 'Time Elapsed: %d nanoseconds', elapsed );
		console.log( 'Time per iteration: %d nanoseconds', elapsed/total );
		console.log( '\n' );
	}


	// EXPORTS //

	module.exports = test;

})();