/**
 * https://leetcode.com/problems/maximum-width-of-binary-tree/description/
 *
 * 모의 인터뷰에 재등장. 인덱스 축소 아이디어를 바로 적용해서 품.
 * (min, max 부분은 큐 순회 전 현재 큐의 양끝에서 바로 빼올 수 있긴 함..)
 */

function widthOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;
  const queue: { node: TreeNode; idx: number }[] = [{ node: root, idx: 0 }];
  let ans = 0;
  while (queue.length) {
    const len = queue.length;
    const shrink = queue[0].idx;
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < len; i++) {
      const { node, idx } = queue.shift()!;
      min = Math.min(min, idx);
      max = Math.max(max, idx);
      if (node.left) queue.push({ node: node.left, idx: idx * 2 - 1 - shrink });
      if (node.right) queue.push({ node: node.right, idx: idx * 2 - shrink });
    }
    ans = Math.max(ans, max - min + 1);
  }
  return ans;
}
