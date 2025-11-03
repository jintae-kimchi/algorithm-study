/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 *
 * 트리 기본문제. inorder 구현
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

function inorderTraversal(root: TreeNode | null): number[] {
  const ans = [];
  /**
    inorder: left->top->right
     */
  const search = (node: TreeNode | null) => {
    if (!node) return;
    search(node.left);
    ans.push(node.val);
    search(node.right);
  };
  search(root);

  return ans;
}
