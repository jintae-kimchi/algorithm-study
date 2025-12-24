/**
 * https://leetcode.com/problems/buddy-strings/description/
 *
 * 모의테스트로 품
 * set 부분 리펙토링(예를 들어. new Set(s).size === s)
 */

function buddyStrings(s: string, goal: string): boolean {
  // not equal
  if (s.length !== goal.length) return false;

  // same
  if (s === goal) {
    const s_set = new Set<string>();
    for (let i = 0; i < s.length; i++) {
      const sch = s[i];
      if (s_set.has(sch)) {
        return true;
      } else {
        s_set.add(sch);
      }
    }
    return false;
  }

  // can swap
  let first = -1;
  let second = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      if (first === -1) {
        first = i;
      } else if (second === -1) {
        second = i;
      } else {
        return false;
      }
    }
  }
  if (first === -1 || second === -1) return false;

  return s[first] === goal[second] && s[second] === goal[first];
}
// aab baa : normal case (dup)
// ab ba : normal case (no dup)
// aa aa : same case (dup)
// ab ab : same case (no dup)
