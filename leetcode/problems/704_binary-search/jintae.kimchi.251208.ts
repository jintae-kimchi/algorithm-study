/**
 * https://leetcode.com/problems/binary-search/description/
 *
 * 국룰 코드 학습.
 */

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // overflow 가능성 있음.
    // const mid = Math.floor((right + left) / 2);
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
