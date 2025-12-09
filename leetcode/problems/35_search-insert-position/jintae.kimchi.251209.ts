/**
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * binary serach 응용
 */

function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return left;
}
