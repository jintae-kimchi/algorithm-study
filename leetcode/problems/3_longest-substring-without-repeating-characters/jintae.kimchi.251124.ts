/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * set 으로 풀면 깔끔한데 중복값을 찾는 과정이 비효율적임.
 * map 을 이용하여 이전 중복값 위치를 바로 찾는 방식으로 최적화
 */

function lengthOfLongestSubstring(s: string): number {
  // const set = new Set<string>();
  // let left = 0;
  // let max = 0;
  // for (let right = 0; right < s.length; right++) {
  //     while (set.has(s[right]) && left < right) {
  //         set.delete(s[left]);
  //         left++;
  //     }
  //     set.add(s[right]);
  //     max = Math.max(max, set.size);
  // }
  // return max;

  const map = new Map<string, number>();
  let left = 0;
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      const prevIdx = map.get(s[right])!;
      if (prevIdx >= left) {
        left = prevIdx + 1;
      }
    }
    map.set(s[right], right);
    max = Math.max(max, right - left + 1);
  }
  return max;
}
