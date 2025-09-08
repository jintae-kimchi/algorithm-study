/**
 * https://leetcode.com/problems/power-of-two/description/
 */

// shit code. 비트 연산 사용해서 풀어야 함
function isPowerOfTwo(n: number): boolean {
  if (n === 1) return true;
  let acc = 1;
  while (acc < n) {
    acc *= 2;
  }
  return acc === n;
}

function isPowerOfTwo_solution(n: number): boolean {
  if (n < 1) return false;
  if (n === 1) return true;
  return (n & (n - 1)) === 0;
}

// 1000 & 111 = 0000
// 111 & 110 = 110
// 110 & 101 = 100
// 101 & 100 = 100
// 100 & 11 = 000
