/**
 * https://leetcode.com/problems/find-largest-value-in-each-tree-row/description/
 *
 * 모의 인터뷰로 풀이.
 *
 * 간단한 BFS 문제 (왜 medium?)
 */

function largestValues(root: TreeNode | null): number[] {
  const ans: number[] = [];
  if (!root) return ans;

  const queue: TreeNode[] = [root];

  while (queue.length) {
    const len = queue.length;
    let max = queue[0].val;
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      max = Math.max(node.val, max);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    ans.push(max);
  }

  return ans;
}
