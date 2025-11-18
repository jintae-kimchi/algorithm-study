/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/description/
 *
 * 슬라이딩 윈도우 국룰문제. 리턴값 유의
 */

function minSubArrayLen(target: number, nums: number[]): number {
  let acc = 0;
  let min = Infinity;
  let left = 0;

  // 늘리기
  for (let i = 0; i < nums.length; i++) {
    // 일단 더하고 시작
    acc += nums[i];

    // 줄이기
    while (acc >= target && left <= i) {
      // 최소값 업데이트 시도
      min = Math.min(min, i - left + 1);
      acc -= nums[left];
      left++;
    }
  }

  return min === Infinity ? 0 : min;
}
