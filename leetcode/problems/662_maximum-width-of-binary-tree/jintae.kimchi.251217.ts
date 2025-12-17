/**
 * https://leetcode.com/problems/maximum-width-of-binary-tree/description/
 *
 * 모의 인터뷰
 */

function widthOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;

  let maxWidth = 0;
  const queue: { node: TreeNode; idx: number }[] = [{ node: root, idx: 0 }];

  while (queue.length) {
    const len = queue.length;
    const min = queue[0].idx;
    const max = queue[len - 1].idx;
    const curRange = max - min + 1;
    maxWidth = Math.max(maxWidth, curRange);

    for (let i = 0; i < len; i++) {
      const { node, idx } = queue.shift()!;
      if (node.left) {
        queue.push({ node: node.left, idx: (idx - min) * 2 });
      }
      if (node.right) {
        queue.push({ node: node.right, idx: (idx - min) * 2 + 1 });
      }
    }
  }

  return maxWidth;
}
