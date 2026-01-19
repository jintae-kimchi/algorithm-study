/**
 * https://leetcode.com/problems/min-cost-climbing-stairs/description/
 *
 * DP 학습
 */

function minCostClimbingStairs(cost: number[]): number {
  const memo = new Array(cost.length + 1).fill(-1);
  //
  const solve = (i: number) => {
    if (i < 0) return 0;
    if (memo[i] != -1) return memo[i];

    // 한칸 전 vs 두칸 전
    const oneStep = solve(i - 1) + (cost[i - 1] ?? 0);
    const twoStep = solve(i - 2) + (cost[i - 2] ?? 0);

    memo[i] = Math.min(oneStep, twoStep);
    return memo[i];
  };

  return solve(cost.length);
}
