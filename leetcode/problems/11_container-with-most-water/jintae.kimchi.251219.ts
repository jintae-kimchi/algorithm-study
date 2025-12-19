/**
 * https://leetcode.com/problems/container-with-most-water/submissions/1859344372/
 *
 * greedy + sliding window 학습
 *
 * 작은 값이 높이이므로 무조건 커질 수 있는 방향으로 좁혀나가야 함.
 */

function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
