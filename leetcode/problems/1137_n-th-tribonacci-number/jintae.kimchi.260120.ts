/**
 * https://leetcode.com/problems/n-th-tribonacci-number/description/
 *
 * DP 학습
 *
 * top-down 연습
 */

function tribonacci(n: number): number {
  const memo = new Array(n + 1).fill(-1);
  const solve = (i: number): number => {
    if (i <= 0) return 0;
    if (i === 1) return 1;
    if (i === 2) return 1;
    if (memo[i] != -1) return memo[i];

    const t1 = solve(i - 3);
    const t2 = solve(i - 2);
    const t3 = solve(i - 1);
    const sum = t1 + t2 + t3;
    memo[i] = sum;
    return sum;
  };
  return solve(n);
}
