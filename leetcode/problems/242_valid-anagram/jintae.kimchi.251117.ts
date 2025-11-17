/**
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * 해당 문제는 첫 줄의 예외처리 여부가 성능향상에 큰 영향을 미침
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1);
  }
  for (let i = 0; i < t.length; i++) {
    map.set(t[i], (map.get(t[i]) ?? 0) - 1);
  }
  for (const [k, v] of map) {
    if (v !== 0) return false;
  }
  return true;
}
