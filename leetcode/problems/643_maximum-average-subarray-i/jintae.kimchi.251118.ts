/**
 * https://leetcode.com/problems/maximum-average-subarray-i/submissions/1833172399/
 *
 * for문을 두개로 나누는 것이 더 깔끔
 */

function findMaxAverage(nums: number[], k: number): number {
  let count = 0;
  let acc = 0;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (count < k) {
      count++;
      acc += nums[i];
    }

    if (count === k) {
      max = Math.max(max, acc);
      count--;
      acc -= nums[i + 1 - k];
    }
  }
  return max / k;
}
