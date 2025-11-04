/**
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * 깊게 생각 안하고 직관으로 푼 감이 있음.
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

function isSymmetric(root: TreeNode | null): boolean {
  const mirror = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (!left && !right) return true;
    if (left?.val !== right?.val) return false;

    return mirror(left!.left, right!.right) && mirror(left!.right, right!.left);
  };
  return mirror(root?.left, root?.right);
}
