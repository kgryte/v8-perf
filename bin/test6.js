(function(){
	'use strict';

	// VARIABLES //

	var FLG = true,
		TIME = 20000, // milliseconds
		IDX = 0,
		START;


	// FUNCTIONS //

	/**
	* FUNCTION: foo()
	*	Recursively invoked function.
	*
	* @private
	*/
	function foo() {
		++IDX;
		if ( FLG ) {
			setImmediate( foo );
		}
	}

	/**
	* FUNCTION: onTimeout()
	*	Callback invoked after a timeout. The callback ends the recursive invocation.
	*
	* @private
	*/
	function onTimeout() {
		var diff,
			elapsed,
			secs,
			rate,
			time;

		FLG = false;
		diff = process.hrtime( START );

		elapsed = diff[ 0 ]*1e9 + diff[ 1 ];
		secs = elapsed/1e9;

		rate = IDX / secs;
		time = elapsed / IDX;

		console.log( '===' );
		console.log( 'TIMERS: scheduling immediate function execution...' );
		console.log( 'Time Elapsed: %d seconds', Math.round( secs ) );
		console.log( 'Total: %d', IDX );
		console.log( 'Rate: %d ops per second', Math.floor( rate ) );
		console.log( 'Avg op time: %d nanoseconds', Math.ceil( time ) );
		console.log( '\n' );
	}


	// TEST //

	/**
	* FUNCTION: test()
	*	Measures the average operation time executing an immediately invoked function.
	*/
	function test() {
		START = process.hrtime();
		IDX = 0;
		foo();
		setTimeout( onTimeout, TIME );
	}


	// EXPORTS //

	module.exports = test;

})();