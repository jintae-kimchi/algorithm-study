/**
 * https://leetcode.com/problems/find-common-characters/description/
 *
 * 성능 개인기록 경신..
 * 다음에 또 만나면 배열로 풀기
 */

function commonChars(words: string[]): string[] {
  const dict = new Map<string, number>();
  for (let j = 0; j < words.length; j++) {
    const wDict = new Map<string, number>();
    for (let i = 0; i < words[j].length; i++) {
      wDict.set(words[j][i], (wDict.get(words[j][i]) ?? 0) + 1);
    }
    if (j === 0) {
      for (const [k, v] of wDict) {
        dict.set(k, v);
      }
    } else {
      for (const [k, v] of dict) {
        if (!wDict.has(k)) {
          dict.delete(k);
        } else {
          const dch = dict.get(k)!;
          const wch = wDict.get(k)!;
          dict.set(k, Math.min(dch, wch));
        }
      }
    }
  }
  const ans = [];
  for (const [k, v] of dict) {
    for (let i = 0; i < v; i++) {
      ans.push(k);
    }
  }
  return ans;
}

/*
dictionary
a:1     a:1     
b:1     b:1
e:1     e:1     e:1
l:2     l:2     l:2
                o:1
                r:2
                
a:1     a:1     -
b:1     b:1     -
e:1     e:1     e:1
l:2     l:2     l:2

        [a, b, d, e, f, l, o, r]
         0  0  0  0  0  0  0  0
bella    1  1  0  1  0  2  0  0
--------------------------------
         1  1  0  1  0  2  0  0
label    1  1  0  1  0  2  0  0
--------------------------------
         1  1  0  1  0  2  0  0
roller   0  0  0  1  0  2  1  2
--------------------------------
         0  0  0  1  0  2  0  0
    
        [c, k, l, o, z]
cool     1  0  1  2  0
------------------------
         1  0  1  2  0
lock     1  1  1  1  0
------------------------
         1  0  1  1  0
cook     1  1  0  2  0
------------------------
         1  0  0  1  0
*/
