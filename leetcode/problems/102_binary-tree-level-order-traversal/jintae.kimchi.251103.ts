/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * 트리 BFS 기본 문제.
 * (내 구현보단 각 레벨의 큐만큼 내부에 for문 배치하는게 상태관리 측면에서 이점이 있음.)
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

function levelOrder(root: TreeNode | null): number[][] {
  const levels: number[][] = [];
  let queue = [root];
  let currentLevel: number[] = [];
  let nextQueue = [];
  while (queue.length) {
    const node = queue.shift();
    if (!node) break;
    currentLevel.push(node.val);
    if (node.left) nextQueue.push(node.left);
    if (node.right) nextQueue.push(node.right);
    if (!queue.length) {
      queue = nextQueue;
      nextQueue = [];
      levels.push(currentLevel);
      currentLevel = [];
    }
  }
  return levels;
}
