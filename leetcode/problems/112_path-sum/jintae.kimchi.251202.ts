/**
 * https://leetcode.com/problems/path-sum/description/
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const dfs = (node: TreeNode | null, acc: number) => {
    if (!node) return false;
    acc += node.val;
    if (!node.left && !node.right) {
      if (acc === targetSum) return true;
    }
    return dfs(node.left, acc) || dfs(node.right, acc);
  };
  return dfs(root, 0);
}
