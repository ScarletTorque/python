// What is Recursion?
// Basically: when a function calls itself within itself


// Write a recursive function that, given a number, returns the sum of 
// integers from one up to that given number
// Ex: given 5 would return 1+2+3+4+5 == 15
// Ex: given 2.5 would return 1+2 == 3

function sigma(num) {
    var sum = 0
    for (i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}

function recursiveSigma(num) {
    num = Math.floor(num)
    if (num == 0) {
        return 0
    }
    return num + recursiveSigma(num - 1)
}

// console.log(recursiveSigma(2.5))

// ===============================================================================
// Recursive Factorial
// ===============================================================================


// Write a drecursive function that, given a number, returns the product of integers up to a given number
// Ex: given 4 would return 1*2*3*4 == 24
// Ex: given 3.5 would return 1*2*3 == 6 

function recursiveFactorial(num) {
    num = Math.floor(num)
    if (num <= 1) {
        return 1
    }
    return num * recursiveFactorial(num - 1)
}

console.log(recursiveFactorial(4));

// ===============================================================================
// Recursive Fibonacci
// ===============================================================================

// Given a number, add the collective sum up to that number (using Fibonacci sequence). The sum is of the previous 2 Fibonacci numbers.

// F0    F1    F2    F3    F4    F5    F6    F7    F8    F9    F10    
// 0    1    1    2    3    5    8    13    21    34    55    

function recursiveFibonacci(num) {
    num = Math.floor(num)
    if (num <= 1) {
        return num
    }
    return recursiveFibonacci(num - 2) + recursiveFibonacci(num - 1)
}


console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(4));
console.log(recursiveFibonacci(5));
console.log(recursiveFibonacci(6));
console.log(recursiveFibonacci(7));
console.log(recursiveFibonacci(8));
console.log(recursiveFibonacci(9));

/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3, 4, 5, 6];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

// /
//     * Add params if needed for recursion
//         * Recursively sums the given array.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param { Array < number >} nums
//     * @returns { number } The sum of the given nums.
//  /
function sumArr(nums, index = 0) {

    var sum = nums.length - index

    if (sum <= 0) {
        return 0;
    }

    return nums[index] + sumArr(nums, index + 1)
}


console.log(sumArr(nums1))


/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num, index = 0) {

    var nums = num.toString()

    var sum = nums.length - index

    if (nums.length == 1) {
        return nums;
    }

    return parseInt(num.toString()[i]) + sumToOneDigit(num, index + 1)
}
console.log(sumToOneDigit(num1))
console.log(sumToOneDigit(num2))
console.log(sumToOneDigit(num3))


/*****************************************************************************/

/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function generateAnagrams(str) {}

// *** For this one you will need extra inputs in the method most likely! What would they be? *** //