/**
 * https://leetcode.com/problems/permutation-in-string/description/
 *
 * s1 길이만큼 s2 범위를 정하여 각 구간마다 순열인지 검사.
 * 난 map으로 조금 복잡하게 풀었는데, 빈도수 배열을 사용하면 조금 더 깔끔하게 풀 수 있음.
 */

function checkInclusion(s1: string, s2: string): boolean {
  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();
  for (let i = 0; i < s1.length; i++) {
    map1.set(s1[i], (map1.get(s1[i]) ?? 0) + 1);
    map2.set(s2[i], (map2.get(s2[i]) ?? 0) + 1);
  }

  const compare = (left: number, right: number) => {
    for (const [k, v] of map1) {
      if (!map2.has(k) || map2.get(k) !== v) return false;
    }
    return true;
  };

  let left = 0;
  for (let right = s1.length - 1; right < s2.length; right++) {
    if (compare(left, right)) return true;
    const remCh = s2[left];
    const addCh = s2[right + 1];
    map2.set(remCh, (map2.get(remCh) ?? 1) - 1);
    map2.set(addCh, (map2.get(addCh) ?? 0) + 1);
    left++;
  }
  return false;
}
