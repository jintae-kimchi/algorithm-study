/**
 * https://leetcode.com/problems/insert-into-a-binary-search-tree/description/
 */

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return new TreeNode(val);
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
}

function insertIntoBST_이게성능더잘나왔음(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  if (!root) return new TreeNode(val);
  const insert = (node: TreeNode | null) => {
    if (!node) return;

    if (node.val > val) {
      if (!node.left) {
        node.left = new TreeNode(val);
      } else {
        insert(node.left);
      }
    } else if (node.val < val) {
      if (!node.right) {
        node.right = new TreeNode(val);
      } else {
        insert(node.right);
      }
    }
  };
  insert(root);
  return root;
}
