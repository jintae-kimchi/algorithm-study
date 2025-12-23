/**
 * https://leetcode.com/problems/min-cost-climbing-stairs/description/
 *
 * DP 학습
 */

function minCostClimbingStairs(cost: number[]): number {
  let prev1 = cost[1];
  let prev2 = cost[0];
  for (let i = 2; i <= cost.length; i++) {
    let current = 0;
    if (prev1 > prev2) {
      current = (cost[i] ?? 0) + prev2;
    } else {
      current = (cost[i] ?? 0) + prev1;
    }
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}
