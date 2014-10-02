(function(){
	'use strict';

	// FUNCTIONS //

	/**
	* FUNCTION: mean()
	*	Returns a method to calculate the mean recursively (Welford's method).
	*
	* @private
	* @returns {Function} method to incrementally calculate the mean
	*/
	function mean() {
		var N = 0,
			delta;
		/**
		* FUNCTION: mean( mu, x )
		*	Incrementally calculates the mean.
		*
		* @private
		* @param {Number} mu - accumulator (mean)
		* @param {Number} x - new value
		* @returns {Number} incremented mean value
		*/
		return function mean( mu, x ) {
			N += 1;
			delta = x - mu;
			mu += delta / N;
			return mu;
		};
	}

	// TEST //

	/**
	* FUNCTION: test()
	*	Measures the average operation time executing a single loop of a FOR loop involving incremental calculation of a mean value.
	*/
	function test() {
		var total = 1e9,
			calc = mean(),
			mu = 0,
			x,
			start,
			i,
			diff,
			elapsed;

		start = process.hrtime();
		for ( i = 0; i < total; i++ ) {
			x = Math.random() * 100;
			mu = calc( mu, x );
		}
		diff = process.hrtime( start );

		elapsed = diff[ 0 ]*1e9 + diff[ 1 ];

		console.log( '===' );
		console.log( 'FOR LOOP: calculating a mean recursively...' );
		console.log( 'Mean: %d', mu );
		console.log( 'Time Elapsed: %d nanoseconds', elapsed );
		console.log( 'Time per iteration: %d nanoseconds', elapsed/total );
		console.log( '\n' );
	}


	// EXPORTS //

	module.exports = test;

})();