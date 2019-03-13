'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

 function yell(string){
     let result;
     result = string.toUpperCase();
     return result;
 }


//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell('coco'), 'COCO')
// End of tests */
