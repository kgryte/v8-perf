(function(){
	'use strict';

	// TEST //

	/**
	* FUNCTION: test()
	*	Measures the average operation time executing a single loop of a FOR loop involving multiple arithmetic operations.
	*/
	function test() {
		var total = 1e9,
			x = Math.random(),
			start,
			i,
			diff,
			elapsed;

		start = process.hrtime();
		for ( i = 0; i < total; i++ ) {
			x = x * 9 / 3 / 3 * 5 / 5 - 1 + 2 - 1;
		}
		diff = process.hrtime( start );

		elapsed = diff[ 0 ]*1e9 + diff[ 1 ];

		console.log( '===' );
		console.log( 'FOR LOOP: multiple arithmetic operations...' );
		console.log( 'Time Elapsed: %d nanoseconds', elapsed );
		console.log( 'Time per iteration: %d nanoseconds', elapsed/total );
		console.log( '\n' );
	}


	// EXPORTS //

	module.exports = test;

})();