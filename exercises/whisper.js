'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

 function whisper(string){
    let result;
    result = "*" + string.toLowerCase() + "*";
    return result;
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(whisper('COCO'), '*coco*')
// End of tests */
