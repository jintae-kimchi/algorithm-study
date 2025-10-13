/**
 * https://leetcode.com/problems/subsets/description/
 *
 * dfs 탐색 작성 능력
 * subset, permutation 의 차이는 순서를 지켜야 하는지 여부임
 */

function subsets(nums: number[]): number[][] {
  const ans: number[][] = [];
  const dfs = (arr: number[], idx: number) => {
    ans.push([...arr]);

    for (let i = idx; i < nums.length; i++) {
      arr.push(nums[i]);
      dfs(arr, i + 1);
      arr.pop();
    }
  };

  dfs([], 0);

  return ans;
}
