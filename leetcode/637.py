# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def averageOfLevels(self, root):
        """
        :type root: TreeNode
        :rtype: List[float]
        """
        r = []
        levels = [[root]]

        while levels[-1]:
            r.append([])
            levels.append([])
            for i in levels[-2]:
                r[-1].append(i.val)
                i.left and levels[-1].append(i.left)
                i.right and levels[-1].append(i.right)
        return [sum(x) / len(x) for x in r]

