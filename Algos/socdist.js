/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    let temp = -100
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] == 1) {
            if ((i - temp) < 7) {
                return false
            }
            temp = i
        }
    }
    return true
}


console.log(socialDistancingEnforcer(queue1))
console.log(socialDistancingEnforcer(queue2))
console.log(socialDistancingEnforcer(queue3))
console.log(socialDistancingEnforcer(queue4))
/*****************************************************************************/

/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    if (nums.length < 3) {
        return -1
    }
    var sum_right = 0
    var sum_left = nums[0]
    for (var y = 1; y < nums.length; y++) {
        sum_right += nums[y]
    }

    var x = 1
    while (x < nums.length) {
        if (x == 1) {
            sum_right -= nums[x]
        }
        else {
            sum_right -= nums[x]
            sum_left += nums[x - 1]
            if (sum_left == sum_right) {
                return x
            }
        }
        x++
    }
    return -1
}


console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))