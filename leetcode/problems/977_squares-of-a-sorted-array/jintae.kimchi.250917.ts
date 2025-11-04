/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * Runtime 99 ms Beats 86.9% Memory 49.5 MB Beats 63.86%
 *
 * 문제에서 제시한 복잡도로 풀었지만 작은 값부터 넣는 방식을 채택하여 코드가 지저분해졌음
 */

function sortedSquares_250918(nums: number[]): number[] {
  if (nums.length === 1) return [nums[0] ** 2];

  let min = Infinity;
  let minIdx = -1;
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] ** 2;
    if (min >= nums[i]) {
      min = nums[i];
      minIdx = i;
    }
  }

  let left = minIdx;
  let right = minIdx;
  const ans: number[] = [];
  while (left >= 0 || right < nums.length) {
    // [3, 2, 1, 0, 0, 0, 2, 3, 4]
    //           m

    if (left < 0) {
      // 한쪽 탐색이 끝나면 나머지를 그냥 담음
      ans.push(nums[right++]);
    } else if (right >= nums.length) {
      ans.push(nums[left--]);
    } else if (left === right) {
      // 같은 인덱스처리
      // 같은 값을 바라보고 있고 길이가 2이상이므로 아무거나 밀어도 됨
      if (left > 0) {
        ans.push(nums[left--]);
        right++;
      } else {
        ans.push(nums[right++]);
        left--;
      }
    } else if (nums[left] < nums[right]) {
      // 작은값부터 넣기
      ans.push(nums[left--]);
    } else {
      ans.push(nums[right++]);
    }
  }
  return ans;
}

/**
 * 큰 값부터 넣는 방식으로 복기 풀이
 */
function sortedSquares_250918_solution(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  let idx = nums.length - 1;
  const ans: number[] = new Array(nums.length);
  while (left <= right) {
    const lval = nums[left] ** 2;
    const rval = nums[right] ** 2;
    if (lval > rval) {
      ans[idx] = lval;
      left++;
    } else {
      ans[idx] = rval;
      right--;
    }
    idx--;
  }
  return ans;
}
