/**
 * https://leetcode.com/problems/ransom-note/description/
 *
 * 최적화 방안: 배열로 전환(27)하고 magazine은 ++ ransomNote는 -- 하는 카운팅 방식으로 개선 가능
 */

function canConstruct(ransomNote: string, magazine: string): boolean {
  const rMap = new Map<string, number>();
  for (let i = 0; i < ransomNote.length; i++) {
    rMap.set(ransomNote[i], (rMap.get(ransomNote[i]) ?? 0) + 1);
  }
  const mMap = new Map<string, number>();
  for (let i = 0; i < magazine.length; i++) {
    mMap.set(magazine[i], (mMap.get(magazine[i]) ?? 0) + 1);
  }
  for (const [k, v] of rMap) {
    if (!mMap.has(k)) return false;
    if (mMap.get(k)! < rMap.get(k)!) return false;
  }
  return true;
}
