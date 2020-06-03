/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let ans = []
  function findVal(root) {
      if (root) {
          ans.push(root.val)
          if (root.left) {
              findVal(root.left)
          }
          if (root.right) {
              findVal(root.right)
          }
      }
  }
  findVal(root)
  return ans
};
