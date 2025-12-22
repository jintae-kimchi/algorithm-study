/**
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * DP
 *
 * 현재 칸 가짓 수 = -1칸 전 가짓 수 + -2칸 전 가짓 수
 */

function climbStairs(n: number): number {
  if (n <= 2) return n;

  let prev1 = 2;
  let prev2 = 1;
  for (let i = 3; i <= n; i++) {
    const cur = prev1 + prev2;
    prev2 = prev1;
    prev1 = cur;
  }
  return prev1;
}
