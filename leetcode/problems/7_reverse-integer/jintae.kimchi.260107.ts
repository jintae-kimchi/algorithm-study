/**
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * 모의인터뷰로 품.
 *
 * 빨리 풀어서 제출하려다보니 코드가 더려워서 리펙토링 버전도 추가
 * 그리고 /, % 연산을 사용하는 방식도 있음을 기억하고 가기
 */

function reverse(x: number): number {
  const sign = x > -1 ? 1 : -1;
  const MAX = 2 ** 31 - 1;
  const MIN = 2 ** 31;
  const MAX_STR = MAX.toString();
  const MIN_STR = MIN.toString();
  const strx = x.toString();
  const reversedStr = strx
    .split("")
    .filter((x) => x !== "-")
    .reverse()
    .join("");
  if (x > -1) {
    if (reversedStr.length > MAX_STR.length) return 0;
    if (reversedStr.length === MAX_STR.length) {
      for (let i = 0; i < reversedStr.length; i++) {
        if (Number(reversedStr[i]) < Number(MAX_STR[i])) break;
        if (Number(reversedStr[i]) > Number(MAX_STR[i])) return 0;
      }
    }
  } else {
    if (reversedStr.length > MIN_STR.length) return 0;
    if (reversedStr.length === MIN_STR.length) {
      for (let i = 0; i < reversedStr.length; i++) {
        if (Number(reversedStr[i]) < Number(MIN_STR[i])) break;
        if (Number(reversedStr[i]) > Number(MIN_STR[i])) return 0;
      }
    }
  }

  return sign * Number(reversedStr);
}
function reverse_refactored(x: number): number {
  const sign = x > -1 ? 1 : -1;
  const reversedStr = Math.abs(x).toString().split("").reverse().join("");
  const COMPARE_MAX = (x > -1 ? 2 ** 31 - 1 : 2 ** 31).toString();
  if (reversedStr.length > COMPARE_MAX.length) return 0;
  if (reversedStr.length === COMPARE_MAX.length) {
    for (let i = 0; i < reversedStr.length; i++) {
      if (reversedStr[i] < COMPARE_MAX[i]) break;
      if (reversedStr[i] > COMPARE_MAX[i]) return 0;
    }
  }

  return sign * Number(reversedStr);
}
