/**
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/description/
 */

function balancedStringSplit(s: string): number {
  let ans = 0;
  let acc = 0;
  for (let i = 0; i < s.length; i++) {
    acc += s[i] === "R" ? 1 : -1;
    if (acc === 0) ans++;
  }
  return ans;
}
/*
RL RRLL RL RL

RL RRRLLRLL

LLLLRRRR


RLRRLLRLRL
*
[R]
1

RLRRLLRLRL
 *
[R, L]
1-1 = 0, cnt = 1

RLRRLLRLRL
  *
[R, L], [R]
1

RLRRLLRLRL
   *
[R, L], [R, R]
1+1

RLRRLLRLRL
    *
[R, L], [R, R, L]
2-1

RLRRLLRLRL
     *
[R, L], [R, R, L, L]
1-1 = 0, cnt = 2

RLRRLLRLRL
      *
[R, L], [R, R, L, L], [R]
1

RLRRLLRLRL
       *
[R, L], [R, R, L, L], [R, L]
1-1 = 0, cnt = 3

RLRRLLRLRL
        *
[R, L], [R, R, L, L], [R, L], [R]
1

RLRRLLRLRL
         *
[R, L], [R, R, L, L], [R, L], [R, L]
1 - 1 = 0, cnt = 4

LLLLRRRR
-1-1-1-1+1+1+1+1 = 0 cnt = 1

R L R R R L L R L L
1-1+1+1+1-1-1+1-1-1
1 0 1 2 3 2 1 2 1 0
  ^               ^
  
R L R R L L R L R L
1-1+1+1-1-1+1-1+1-1
1 0 1 2 1 0 1 0 1 0
  ^       ^   ^   ^
*/
