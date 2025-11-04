/**
 * https://leetcode.com/problems/count-and-say/description/
 *
 * medium
 * string, simulation
 * 31min
 */

function countAndSay(n: number): string {
  let str = "1";

  for (let i = 1; i < n; i++) {
    let ch = str[0];
    let count = 1;
    let nextStr = "";

    let j = 1;
    while (j < str.length) {
      const nextCh = str[j];
      if (nextCh === ch) {
        count += 1;
      } else {
        nextStr += `${count}${ch}`;
        count = 1;
        ch = nextCh;
      }
      j++;
    }
    nextStr += `${count}${ch}`;
    str = nextStr;
  }
  return str;
}
