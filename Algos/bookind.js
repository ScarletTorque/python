// bookIndex(input) -> input is an array of integers, in order
// those integers represent pages in a book where a certain term is found
// output is a string representing a listing of those pages in a book's index
// an input of: [58, 104, 105, 106, 192, 194, 195, 196]
// leads to an output of: "58, 104-106, 192, 194-196"
// input: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 17, 18]
// output: "1-5, 8-12, 15, 17-18"

// suggestion: break this into two parts, or maybe even two
// functions - get your array of integers and turn it into an array
// of strings, then turn that array of strings into a single string
// [58, 104, 105, 106, 192, 194, 195, 196]
// ["58", "104-106", "192", "194-196"]
// "58, 104-106, 192, 194-196"
// also a suggestion: remember that you can modify your for loop iterator
// during your loop! you can add to or subtract from i at any point
// also also: remember that loops can go within loops - while in for,
// for in for, while in while, etc.

// attempt with advice

// function bookIndex(input) {
//     var newstr = '';
//     newstr += input[0];
//     for (var i=0; i<input.length; i++){
//         if (input[i+1]-=input[i]===1) {
//             var start = input[i];
//             while(input[i] + 1 == input[i+1]){
//                 i++
//             }
//             var end = input[i]
//             newstr += (start + "-" + end)
//         } else {
//             newstr += input[i]
//             newstr+="-";
//         }
//     }
//     return newstr
// }

function bookIndex(input) {
    var temp = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i] + 1 == input[i + 1]) {
            var start = input[i];
            while (input[i] + 1 == input[i + 1]) {
                i++;
            }
            var end = input[i];
            temp.push(start + "-" + end);
        } else {
            temp.push(input[i]);
        }
    }
    var newstring = temp.join(",");
    return newstring;
}


function buildString(input) {
    var str = ""
    for (var i = 0; i < input.length; i++) {
        if (i === input.length - 1) {
            str = + input[i]
        }
    }
}

// function bookIndex(input) {
//     // do some stuff here
//     return (buildString(array_of_strings));
// }

// function buildString(input) {
//     // turns input into a string to return
// }

console.log(bookIndex([1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 17, 18]));
// returns "1-5, 8-12, 15, 17-18"
console.log(bookIndex([1, 2, 3, 4, 16, 17, 21, 22, 23, 24])) // returns "1-4, 16, 17, 21-24"
console.log(bookIndex([332, 476])) // returns "332, 476"
console.log(bookIndex([7, 8, 9, 10, 11])) // returns "7-11"
console.log(bookIndex([2, 7, 8, 9, 10, 11])) // returns "2, 7-11"
console.log(bookIndex([7, 8, 9, 10, 11, 23])) // returns "7-11, 23"

/* 
Given an arr and a separator string, output a string of every item in the array separated by the separator.
No trailing separator at the end
Default the separator to a comma with a space after it if no separator is provided
*/

// const arr1 = [1, 2, 3];
// const separator1 = ", ";
// const expected1 = "1, 2, 3";

// const arr2 = [1, 2, 3];
// const separator2 = "-";
// const expected2 = "1-2-3";

// const arr3 = [1, 2, 3];
// const separator3 = " - ";
// const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */

function join(arr, separator) {
    if (separator == ""){
        separator = ", "
    }
    return arr.join(separator)
}


console.log(join([1, 2, 3],""))

// ==============
// Book Index
// ==============
/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

const nums2 = [5, 6, 7, 8, 9];
const expected2 = "5-9";

const nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
const expected3 = "1-3, 7, 9, 15-17";

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
function bookIndex(nums) { }