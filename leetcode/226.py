# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def invertTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        
        def invert(node):
            if node.left or node.right:
                t = node.left
                node.left = node.right
                node.right = t
                
                node.left and invert(node.left)
                node.right and invert(node.right)

        if root is not None:
            invert(root)

        return root