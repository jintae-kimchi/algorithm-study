/**
 * https://leetcode.com/problems/assign-cookies/description/
 *
 * greedy 학습
 */

function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let ans = 0;
  let i = 0;
  let j = 0;
  while (i < g.length && j < s.length) {
    const child = g[i];
    let cookie = s[j];

    // 줄 쿠키가 없음
    if (child > cookie) {
      j++;
    } else {
      ans++;
      i++;
      j++;
    }
  }
  return ans;
}
