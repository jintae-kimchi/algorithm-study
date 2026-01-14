/**
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * 모의 인터뷰로 풀이.
 *
 * 스택을 사용했지만 정석적인 풀이방법은 투 포인터를 쓰는 것
 */

function reverseVowels(s: string): string {
  const stack: string[] = [];
  const vowels = new Set("aeiouAEIOU");

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (vowels.has(ch)) {
      stack.push(ch);
    }
  }
  const ans: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (vowels.has(ch)) {
      ans.push(stack.pop()!);
    } else {
      ans.push(ch);
    }
  }

  return ans.join("");
}
