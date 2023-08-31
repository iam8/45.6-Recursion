
/** product: calculate the product of an array of numbers. Throw error if array is empty. */
function product(nums) {
    if (!nums.length) throw new Error("Cannot compute product - array is empty!");

    // Base case: array has one value
    if (nums.length === 1) return nums[0];

    // Recursive case
    return nums[0] * product(nums.slice(1));
}


/** longest: return the length of the longest word in an array of words. Throw error if array is
 * empty.
*/
function longest(words) {
    if (!words.length) throw new Error("Cannot compute length of longest word - array is empty!");

    // Base case: array has one value
    if (words.length === 1) return words[0].length;

    // Recursive case
    const firstLen = words[0].length;
    const longestLenLeft = longest(words.splice(1));

    return (firstLen >= longestLenLeft) ? firstLen : longestLenLeft;
}


/** everyOther: return a string with every other letter. */
function everyOther(str) {

}


/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {

}


/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val) {

}


/** revString: return a copy of a string, but in reverse. */
function revString(str) {
    // Base case: the reverse of a length 0 or length 1 string is itself
}


/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val) {
    // Remember to divide and conquer for O(log n)
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
