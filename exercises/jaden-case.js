'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(string){
    string = string.toLowerCase();
    string = string.split(" ");
    for(let i = 0; i < string.length; i++){
       string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
    }
    return string.join(" ");
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase("You must write your own tests"), "You Must Write Your Own Tests")
// End of tests */
