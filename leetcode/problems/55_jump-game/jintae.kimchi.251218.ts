/**
 * https://leetcode.com/problems/jump-game/description/
 *
 * greedy 학습
 */

function canJump(nums: number[]): boolean {
  let max = 0;
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    const jump = nums[i];
    if (jump === 0 && max <= i) break; // !! 갈 수 없는데 현재 점프거리보다 더 오면 더이상 탐색 안함 !!
    if (i + jump >= n - 1) return true; // 빠르게 종료 시킬 조건
    max = Math.max(max, i + jump); // 현재 점프한 가장 큰 거리
  }
  return max >= n - 1;
}
