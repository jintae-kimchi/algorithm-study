/**
 * https://leetcode.com/problems/array-partition/description/
 *
 * 모의 인터뷰로 풀이.
 *
 * 그리디한 접근법으로 품.
 */

function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < nums.length - 1; i += 2) {
    // ❗정렬된 상태이므로 첫번째 값만 쓰면 됨.
    ans += Math.min(nums[i], nums[i + 1]);
  }
  return ans;
}
