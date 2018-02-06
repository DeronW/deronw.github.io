# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def trimBST(self, root, L, R):
        """
        :type root: TreeNode
        :type L: int
        :type R: int
        :rtype: TreeNode
        """
        
        if root is not None and L <= root.val <= R:
            self.trimBST(root.left, L, R)
            self.trimBST(root.right, L, R)
            return root
