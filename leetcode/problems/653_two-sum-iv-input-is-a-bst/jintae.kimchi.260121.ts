/**
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/
 *
 * 모의 인터뷰
 *
 * js 특성 상 bfs를 강요하지 않으면 dfs로 풀어야 함
 */

function findTarget(root: TreeNode | null, k: number): boolean {
  if (!root) return false;
  const set = new Set<number>();
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      const pair = k - node.val;
      if (set.has(pair)) return true;
      set.add(node.val);
      set.add(pair);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return false;
}
