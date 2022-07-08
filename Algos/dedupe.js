// Deduplicate Sorted Array

// Objectives

// Get more familiarity with for loops and arrays
// Think about for loops in more interesting ways

// Implement deduplicateSortedArray(arr), a function that accepts one argument: an array of items (arr). This array of items could be numbers or strings, but not both. The important thing to note is that the array is guaranteed to be sorted - you don't need to do it manually, you can assume that input will be in sorted order.
// The function's output will be the same array, but with all duplicate items in it removed. For example, if your input was [0, 0, 1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 5, 6], your expected output would be [0, 1, 2, 3, 4, 5, 6] - essentially, each item should only be in the array once. You very specifically want to do this in-place - you modify the array you're given. You can return that array if you want, but it's not necessary.

// Once you complete the function: are there other ways to do it? (Hint: there are definitely other ways to do it.) Try writing out another solution with your group. Is one more readable than the other? Is one more efficient? 

function deduplicateSortedArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            for (var j = i; j < arr.length; j++) {
                arr[j] = arr[j + 1]
            }
            arr.length -= 1;
            i--;
        }
    }
}

// Things to consider:
// There are lots of ways of solving this problem - if your group has multiple passionate people, you may get bogged down in deciding which solution to pursue. There's merit in trying to find the best course of action before beginning a task, but overthinking and overplanning is a risk. Remember that a good, working solution that runs and is demonstratable is better than a perfect solution that exists only in your head.

let test_a = [0, 1, 1, 1, 2, 5, 5, 8, 9, 9, 10, 12, 12, 12];
deduplicateSortedArray(test_a);
console.log(test_a); // returns [0, 1, 2, 5, 8, 9, 10, 12]
let test_b = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 6, 6, 6, 7, 7, 7, 7, 7];
deduplicateSortedArray(test_b);
console.log(test_b); // returns [0, 1, 2, 3, 6, 7
let test_c = [];
deduplicateSortedArray(test_c);
console.log(test_c); // returns []
let test_d = [5, 6, 8, 9];
deduplicateSortedArray(test_d);
console.log(test_d); // returns []


/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) { }

/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else
  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5];
const expected1 = 6;

const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 5];
const expected3 = 5;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(nums) {
    // define new empyt object
    let newObj = {};
    // for loop to iterate through passed array
    for (let i = 0; i < nums.length; i++) {
        // if the index value of the array does not exist as a key in our object, create a new key and set value to 1
        if (!newObj.hasOwnProperty(nums[i])) {
            newObj[nums[i]] = 1;
        }
        // if the index value of the array does exist, add 1 
        else {
            newObj[nums[i]]++;
        }
    }
    for(key in newObj){
        if(newObj[key]== '1'){
            return key;
        }
    }
    return null;
}

console.log(firstNonRepeated(nums1))
console.log(firstNonRepeated(nums2))
console.log(firstNonRepeated(nums3))
console.log(firstNonRepeated(nums4))
console.log(firstNonRepeated(nums5))