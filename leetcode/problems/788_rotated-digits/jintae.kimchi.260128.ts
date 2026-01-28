/**
 * https://leetcode.com/problems/rotated-digits/description/
 *
 * 모의 인터뷰. 통과.
 *
 * 직관적인 문자열로 풀었는데, 성능 개선을 위해선 /, % 연산으로 풀어야 함.
 */

function rotatedDigits(n: number): number {
  const invalidList = ["3", "4", "7"];
  const rotateList = ["2", "5", "6", "9"];
  // const sameList = ['0', '1', '8'];
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    const ch = String(i).split("");
    let valid = true;
    let hasGood = false;
    for (let j = 0; j < ch.length; j++) {
      if (invalidList.includes(ch[j])) {
        valid = false;
        break;
      }
      if (rotateList.includes(ch[j])) {
        hasGood = true;
      }
    }
    // console.log(`n: ${i}, v:${ch}, r:${valid}`);
    if (valid && hasGood) ans++;
  }

  return ans;
}
// 857 -> 247
