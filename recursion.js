
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
    if (!str.length) throw new Error("Cannot create result - given string is empty!");

    // Base case: string has 1 or 2 characters
    if (str.length <= 2) return str[0];

    // Recursive case
    return str[0] + everyOther(str.slice(2));
}


/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
    const len = str.length;

    // Base case: string has 1 or 0 characters (this is a valid palindrome)
    if (len <= 1) return true;

    // Compare first and last chars of str
    const first = str[0].toLowerCase();
    const last = str[len - 1].toLowerCase();

    if (first !== last) return false;

    // Recurse if all is good so far (chars match)
    return isPalindrome(str.slice(1, len - 1));
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val) {

    // Base case: array is empty
    if (!arr.length) return -1;

    // Base case: first element equals the sought value
    if (arr[0] === val) return 0;

    const result = findIndex(arr.slice(1), val);

    // Return -1 if recursion result is -1, or 1 + result otherwise
    return (result === -1) ? -1 : 1 + result;
}


/** revString: return a copy of a string, but in reverse. */
function revString(str) {
    // Base case: the reverse of a length 0 or length 1 string is itself
    if (str.length <= 1) return str;

    // Recursive case
    return revString(str.slice(1)) + str[0];
}


/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
    const values = Object.values(obj);
    if (!values.length) return [];

    // Recurse only when a nested object is encountered
    const allStrings = [];
    for (let val of values) {
        if (typeof val === "string") {
            allStrings.push(val);
        } else if (typeof val === "object") {
            allStrings.push(...gatherStrings(val));
        }
    }

    return allStrings;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val) {
    // Base case: arr is empty
    if (!arr.length) return -1;

    // Base case: array has length 1
    if (arr.length === 1) {
        return (arr[0] === val) ? 0 : -1;
    }

    // Choose middle index and compare to value
    const midIdx = Math.floor(arr.length / 2);
    const midVal = arr[midIdx];
    if (midVal === val) return midIdx;

    // Choose side to recurse on
    if (val < midVal) {
        const leftArr = arr.slice(0, midIdx);
        return binarySearch(leftArr, val);
    } else {
        const rightArr = arr.slice(midIdx);
        const result = binarySearch(rightArr, val);
        return (result === -1) ? -1 : midIdx + result;
    }

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
