Performance
===========

> Very simple tests of V8 (and Node.js) performance.

The executable script `./bin/index.js` executes a series of simple tests to measure how long V8 takes to execute an operation (where operation is loosely defined).

To determine operation time, the script uses Node's built-in high-resolution timer: `process.hrtime()`. 

## Tests

The implemented tests are as follows...

#### Timer

This test provides an indication as to how long Node takes to measure elapsed time in high resolution. 

``` javascript
var start = process.hrtime();
var diff = process.hrtime( start );
```

My machine regularly clocks around `2 microseconds`.


#### Counter

This test runs a `FOR` loop which increments a counter `1e9` times. The average time printed to `stdout` is the average iteration time.

``` javascript
var start = process.hrtime(),
	idx = 0;

for ( var i = 0; i < 1e9; i++ ) {
	idx++;
}

var diff = process.hrtime( start );
```

My machine regularly clocks around `1 nanosecond`.


#### Arithmetic

This test runs a `FOR` loop which performs a series of arithmetic operations. The average time printed to `stdout` is the average iteration time.

``` javascript
var start = process.hrtime(),
	x = Math.random();

for ( var i = 0; i < 1e9; i++ ) {
	x = x * 9 / 3 / 3 * 5 / 5 - 1 + 2 - 1;
}

var diff = process.hrtime( start );
```

My machine regularly clocks around `20 nanoseconds`.


#### Random Numbers

This test runs a `FOR` loop which adds two freshly generated random numbers. The average time printed to `stdout` is the average iteration time.

``` javascript
var start = process.hrtime();

for ( var i = 0; i < 1e9; i++ ) {
	add( Math.random(), Math.random() );
}

var diff = process.hrtime( start );
```

My machine regularly clocks around `7 nanoseconds`.



#### Mean

This test runs a `FOR` loop which incrementally calculates a mean value. The average time printed to `stdout` is the average iteration time.

``` javascript
var start = process.hrtime(),
	x = 0,
	mu = 0;

for ( var i = 0; i < 1e9; i++ ) {
	x = Math.random() * 100;
	mu = updateMean( mu, x );
}

var diff = process.hrtime( start );
```

My machine regularly clocks around `30 nanoseconds`.


#### Event Loop

This test recursively calls a function scheduled for immediate execution. See [setImmediate()](http://nodejs.org/api/timers.html#timers_setimmediate_callback_arg). The average time printed to `stdout` is the average operation time.

``` javascript
function foo() {
	i++;
	if ( FLG ) {
		setImmediate( foo );
	}
}
foo();
```

My machine regularly clocks `2 microseconds` and around `0.5e6` operations.


## Run

To run the tests from the top-level application directory,

``` bash
$ node ./bin/index.js
```


## Notes

The _event loop_ test probably sheds light on the _start/stop_ test, in which `process.hrtime()` is executed on the next tick. Hence, the two tests return similar results.



## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.