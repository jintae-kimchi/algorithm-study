/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
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

function maxDepth_dfs(root: TreeNode | null): number {
  let max = 0;
  const search = (node: TreeNode | null, level: number) => {
    if (!node) return;
    max = Math.max(max, level);
    search(node.left, level + 1);
    search(node.right, level + 1);
  };
  search(root, 1);

  return max;
}

function maxDepth_bfs(root: TreeNode | null): number {
  let max = 0;
  let queue = [root];
  let nextQueue = [];
  while (queue.length) {
    const node = queue.pop();
    if (!node) break;
    if (node.left) {
      nextQueue.push(node.left);
    }
    if (node.right) {
      nextQueue.push(node.right);
    }
    if (!queue.length) {
      max += 1;
      queue = nextQueue;
      nextQueue = [];
    }
  }
  return max;
}
