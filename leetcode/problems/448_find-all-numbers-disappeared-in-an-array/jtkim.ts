/**
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
 */

// shit code. 추가공간 없이 풀어야 함
function findDisappearedNumbers(nums: number[]): number[] {
  const set = new Set(nums);
  const arr = Array.from({ length: nums.length }, (_, i) => i + 1);
  const ans = new Set(arr);
  for (const x of set) {
    ans.delete(x);
  }
  return [...ans.values()];
}

function findDisappearedNumbers_solution(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    const v = Math.abs(nums[i]);
    if (nums[v - 1] > 0) {
      nums[v - 1] *= -1;
    }
  }
  const ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      ans.push(i + 1);
    }
  }
  return ans;
}

// [-4,-3,-2,-7,8,2,-3,-1]
// i = 7
// v = 1
// nums[1-1] = 4 > 0
// nums[1-1] = -4

// [4,3,2,7,8,2,3,1]
// [4,3,2,-7,8,2,3,1]
// [4,3,-2,-7,8,2,3,1]
// [4,-3,-2,-7,8,2,3,1]
// [4,-3,-2,-7,8,2,-3,1]
// [4,-3,-2,-7,8,2,-3,-1]
// [4,-3,-2,-7,8,2,-3,-1]
// [4,-3,-2,-7,8,2,-3,-1]
// [-4,-3,-2,-7,8,2,-3,-1]
