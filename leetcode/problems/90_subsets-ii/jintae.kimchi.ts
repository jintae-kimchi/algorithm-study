/**
 * https://leetcode.com/problems/subsets-ii/description/
 *
 * 백트래킹 학습
 */

function subsetsWithDup(nums: number[]): number[][] {
  const ans: number[][] = [];
  nums.sort((a, b) => a - b);
  const dfs = (comb: number[], idx: number) => {
    ans.push([...comb]);

    for (let i = idx; i < nums.length; i++) {
      // 핵심로직 - 가지치기
      if (i > idx && nums[i] === nums[i - 1]) continue;
      comb.push(nums[i]);
      dfs(comb, i + 1);
      comb.pop();
    }
  };
  dfs([], 0);

  return ans;
}
