# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:

    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """

        if root is None:
            return 0
            
        r = [[root]]

        while r[-1]:
            r.append([])
            for i in r[-2]:
                i.left and r[-1].append(i.left)
                i.right and r[-1].append(i.right)

        return len(r) - 1