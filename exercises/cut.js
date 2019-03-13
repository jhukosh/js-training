'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

 function cutFirst(string){
    let strCut =  string.slice(2);
    return strCut;
 }

 function cutLast(string){
    let endCut =  string.slice(0, string.length - 2);
    return endCut;
 }

 function cutFirstLast(string){
     let strShort = string.slice(2,string.length - 2);
     return strShort;
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst('arguments'), 'guments')
assert.strictEqual(cutLast('cola'), 'co')
assert.strictEqual(cutFirstLast('tentative'), 'ntati')
// End of tests */
