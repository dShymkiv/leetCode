// https://leetcode.com/problems/search-insert-position/description/

var searchInsert = function(nums, target) {

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] === target || nums[i] > target) {
      return i;
    }
  }
  return nums.length;
};

console.log(searchInsert([1,3,5,7], 2));
console.log(searchInsert([1,5,7], 3));
console.log(searchInsert([1,3,5,7], 4));
console.log(searchInsert([1,3,5,7], 9));


