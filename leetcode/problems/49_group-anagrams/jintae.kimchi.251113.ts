/**
 * https://leetcode.com/problems/group-anagrams/description/
 */

function groupAnagrams(strs: string[]): string[][] {
  const dict = new Map<string, string[]>();
  strs.forEach((word) => {
    const key: string = word.split("").sort().join("");
    const value: string[] = dict.get(key) ?? [];
    value.push(word);
    dict.set(key, value);
  });
  return [...dict.values()];
}
