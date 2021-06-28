var buildTree = function (preorder, inorder) {
  const mapper = new Map();

  for (let i = 0; i < inorder.length; i++) {
    mapper.set(inorder[i], i);
  }

  const totalLen = preorder.length;
  // 前序遍历时的root，中序遍历时的left & right
  const helper = (root, left, right) => {
    if (left > right) return null;
    const node = new TreeNode(preorder[root]);
    const rootIndex = mapper.get(preorder[root]);

    const leftLen = rootIndex - left;

    /**
     * [root, [left], [right]]
     * [[left], root, [right]]
     */
    node.left = helper(root + 1, left, rootIndex - 1);
    node.right = helper(root + leftLen + 1, rootIndex + 1, right);

    return node;
  };

  const r = helper(0, 0, totalLen - 1);
  return r;
};

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
