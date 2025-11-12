/**
 * https://leetcode.com/problems/maximum-width-of-binary-tree/description/
 *
 * 오버플로 함정을 어떻게 해결하냐가 관건임.
 * [0, null, 0, null, ..., 1, 2, 3, 4, 5, 6]
 * BigInt로 풀 수 있겠지만 취지에 맞지 않아 고민하다 인덱스 최소화 기법으로 제출
 */

function widthOfBinaryTree(root: TreeNode | null): number {
  const queue = [{ node: root, idx: 1 }];
  let ans = 0;
  while (queue.length) {
    const currentLevelLength = queue.length;
    const leftIdx = queue[0].idx;
    const rightIdx = queue[queue.length - 1].idx;
    const diff = rightIdx - leftIdx + 1;
    if (ans < diff) {
      ans = diff;
    }
    for (let i = 0; i < currentLevelLength; i++) {
      const { node, idx } = queue.shift()!;
      if (node.left) queue.push({ node: node.left, idx: idx * 2 - 1 });
      if (node.right) queue.push({ node: node.right, idx: idx * 2 });
    }
    // 인덱스 최소화
    if (queue.length) {
      const v = queue[0].idx - 1; // 1 -> 0, 15 -> 14
      for (let i = 0; i < queue.length; i++) {
        queue[i].idx -= v;
      }
    }
  }
  return ans;
}
/*

각 레벨에서의 노드 인덱스 값 전파 방법
left: curIdx*2 -1
right: curIdx*2

각 레벨마다 최대 길이를 측정해야 함.
루프 구조에서 레벨마다 검사할 수 있게. BFS

[1,3,2,5,3,null,9]
[1,3,2,5,null,null,9,6,null,7]

*/
