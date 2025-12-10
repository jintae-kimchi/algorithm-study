/**
 * https://leetcode.com/problems/word-pattern/description/
 *
 * 모의테스트
 */

function wordPattern(pattern: string, s: string): boolean {
  const pdict = new Map<string, string>();
  const wdict = new Map<string, string>();
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const word = words[i];

    if (!pdict.has(p) && !wdict.has(word)) {
      pdict.set(p, word);
      wdict.set(word, p);
    } else {
      if (pdict.get(p) !== word || wdict.get(word) !== p) return false;
    }
  }
  return true;
}
