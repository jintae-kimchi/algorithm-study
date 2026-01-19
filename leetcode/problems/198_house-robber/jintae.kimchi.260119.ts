/**
 * https://leetcode.com/problems/house-robber/submissions/
 *
 * dp 학습.
 */

// function rob(nums: number[]): number {
//     if (nums.length === 1) return nums[0];

//     let two = nums[0];
//     let one = Math.max(two, nums[1]);
//     for (let i = 2; i < nums.length; i++) {
//         const max = Math.max(one, two + nums[i]);
//         two = one;
//         one = max;
//     }

//     return Math.max(one, two);
// };

// top-down
function rob(nums: number[]): number {
  const memo = new Array(nums.length).fill(-1);

  function solve(i: number): number {
    if (i < 0) return 0;
    if (memo[i] != -1) return memo[i];

    const current = nums[i] + solve(i - 2);
    const before = solve(i - 1);
    const max = Math.max(current, before);
    memo[i] = max;
    return max;
  }

  return solve(nums.length - 1);
}
