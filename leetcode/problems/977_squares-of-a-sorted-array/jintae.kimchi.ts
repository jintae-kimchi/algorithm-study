function sortedSquares(nums: number[]): number[] {
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
