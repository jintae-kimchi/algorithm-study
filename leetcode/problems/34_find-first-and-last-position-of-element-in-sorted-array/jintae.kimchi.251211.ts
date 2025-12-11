/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * binary search 학습. 가능한 값을 업데이트 하면서 계속 탐색하는 기법.
 */

function searchRange(nums: number[], target: number): number[] {
  const binarySearch = (dir: "left" | "right") => {
    let left = 0;
    let right = nums.length - 1;
    let ans = -1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        if (dir === "left") {
          ans = mid;
          right = mid - 1;
        } else {
          ans = mid;
          left = mid + 1;
        }
      }
    }
    return ans;
  };

  return [binarySearch("left"), binarySearch("right")];
}
