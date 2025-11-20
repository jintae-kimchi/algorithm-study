/**
 * https://leetcode.com/problems/long-pressed-name/description/
 *
 * 풀이 실패.
 * two pointer, easy 문제지만 name 기준으로 typed 를 진행시키면 지옥을 맛볼것임.
 */

function isLongPressedName(name: string, typed: string): boolean {
  let ti = 0;
  let ni = 0;

  while (ti < typed.length) {
    if (name[ni] === typed[ti]) {
      ni++;
    } else if (typed[ti] === typed[ti - 1]) {
    } else {
      return false;
    }
    ti++;
  }

  return ni === name.length;
}
