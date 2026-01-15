/**
 * https://leetcode.com/problems/triangle/description/
 *
 * DP 학습
 *
 * bottom-up 방식이 유리함. 한가지 방식에 매몰되지 말자..
 */

// bottom-up
function minimumTotal(triangle: number[][]): number {
  for (let h = triangle.length - 2; h >= 0; h--) {
    for (let i = 0; i < triangle[h].length; i++) {
      triangle[h][i] += Math.min(triangle[h + 1][i], triangle[h + 1][i + 1]);
    }
  }
  return triangle[0][0];
}

// top-down
// function minimumTotal(triangle: number[][]): number {
//     const height = triangle.length;
//     const ans: number[][] = Array.from({ length: height }, (_, i) => new Array(i + 1).fill(0));
//     ans[0][0] = triangle[0][0];

//     for (let h = 1; h < height; h++) {
//         for (let i = 0; i < triangle[h].length; i++) {
//             const left = ans[h-1][i-1] ?? Infinity;
//             const right = ans[h-1][i] ?? Infinity;
//             ans[h][i] = triangle[h][i] + Math.min(left, right);
//         }
//     }

//     let min = ans[height - 1][0];
//     for (let i = 0; i < ans[height - 1].length; i++) {
//         min = Math.min(min, ans[height - 1][i]);
//     }
//     return min;
// };
