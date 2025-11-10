/**
 * https://leetcode.com/problems/validate-binary-search-tree/description/
 *
 * medium
 * 패턴 학습 과정으로 완성한 코드임.
 */

function isValidBST(root: TreeNode | null): boolean {
  const isValid = (node: TreeNode | null, max: number, min: number) => {
    if (!node) return true;
    if (node.val <= min) return false;
    if (node.val >= max) return false;

    return (
      isValid(node.left, node.val, min) && isValid(node.right, max, node.val)
    );
  };
  return isValid(root, Infinity, -Infinity);
}
