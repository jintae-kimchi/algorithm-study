/**
 * https://leetcode.com/problems/combination-sum-ii/description/
 *
 * medium
 * dfs, backtracking
 * 못품, 솔루션 보고 완성함
 */

function combinationSum2(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];

  candidates.sort((a, b) => a - b);

  const dfs = (currentIdx: number, arr: number[], acc: number) => {
    if (acc > target) return;
    if (acc === target) {
      ans.push([...arr]);
      return;
    }
    for (let i = currentIdx; i < candidates.length; i++) {
      if (i > currentIdx && candidates[i] === candidates[i - 1]) continue;
      arr.push(candidates[i]);
      dfs(i + 1, arr, acc + candidates[i]);
      arr.pop();
    }
  };
  dfs(0, [], 0);

  return ans;
}
