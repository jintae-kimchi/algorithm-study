/**
 * https://leetcode.com/problems/house-robber/
 *
 * 점화식 딸깍
 */
function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  const dp = new Array(nums.length).fill(undefined);
  dp[0] = nums[0];
  dp[1] = Math.max(dp[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp.pop();
}
