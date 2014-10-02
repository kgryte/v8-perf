(function(){
	'use strict';

	// TEST //

	/**
	* FUNCTION: test()
	*	Measures the average operation time executing a single loop of a simple FOR loop.
	*/
	function test() {
		var total = 1e9,
			x = 0,
			start,
			i,
			diff,
			elapsed;

		start = process.hrtime();
		for ( i = 0; i < total; i++ ) {
			x++;
		}
		diff = process.hrtime( start );

		elapsed = diff[ 0 ]*1e9 + diff[ 1 ] - 2000;

		console.log( '===' );
		console.log( 'FOR LOOP: counter...' );
		console.log( 'Time Elapsed: %d nanoseconds', elapsed );
		console.log( 'Time per iteration: %d nanoseconds', elapsed/total );
		console.log( '\n' );
	}


	// EXPORTS //

	module.exports = test;

})();