/**
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * DP 학습
 */

function climbStairs(n: number): number {
  const memo = new Array(n + 1).fill(-1);
  const solve = (i: number) => {
    if (i === 0) return 1;
    if (i === 1) return 1;
    if (memo[i] != -1) return memo[i];

    const one = solve(i - 1);
    const two = solve(i - 2);
    memo[i] = one + two;
    return memo[i];
  };
  return solve(n);
}
