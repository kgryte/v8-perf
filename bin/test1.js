(function() {
	'use strict';

	// TEST //

	/**
	* FUNCTION: test()
	*	Measures elapsed time between immediate start and stop calls.
	*/
	function test() {
		var start,
			diff,
			elapsed;

		start = process.hrtime();
		diff = process.hrtime( start );

		elapsed = diff[ 0 ]*1e9 + diff[ 1 ];

		console.log( '\n===' );
		console.log( 'START/STOP...' );
		console.log( 'Time Elapsed: %d nanoseconds', elapsed );
		console.log( '\n' );
	}
	

	// EXPORTS //

	module.exports = test;

})();