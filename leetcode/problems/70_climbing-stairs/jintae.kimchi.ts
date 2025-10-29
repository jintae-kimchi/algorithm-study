/**
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * 현재 칸에 올 수 있는 경우 -1, -2칸 전.
 * -1칸 전 + -2칸 전 = 현재 칸의 가짓 수
 * (힌트: 현재 케이스 마지막 숫자 기준으로 묶으면 -1, -2 칸 케이스와 동일)
 * (어쩔 dp)
 *
 */

function climbStairs(n: number): number {
  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
/**
0: 
    0
1: 
    1
2: 
    1+1, 
    2
3: 
    1+1+1, 
    2+1
    1+2, 
4: 
    1+1+1+1, 
    1+2+1, 
    2+1+1, 
    1+1+2, 
    2+2
5:
    1+1+1+1+1
    1+1+2+1
    1+2+1+1
    2+1+1+1
    2+2+1
    1+1+1+2
    1+2+2
    2+1+2
 */
