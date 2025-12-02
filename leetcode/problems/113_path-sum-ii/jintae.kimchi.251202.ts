/**
 * https://leetcode.com/problems/path-sum-ii/description/
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const ans: number[][] = [];
  const path: number[] = [];
  const dfs = (node: TreeNode | null, acc: number) => {
    if (!node) return;
    path.push(node.val);
    acc += node.val;
    if (!node.left && !node.right) {
      if (acc === targetSum) {
        ans.push([...path]);
      }
    } else {
      dfs(node.left, acc);
      dfs(node.right, acc);
    }
    path.pop();
  };
  dfs(root, 0);
  return ans;
}
