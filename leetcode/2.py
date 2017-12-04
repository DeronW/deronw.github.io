# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """

        r = []

        i = 0
        while l1:
            r.append(l1.val)
            l1 = l1.next
            i += 1

        j = 0
        while l2:
            if j < i:
                r[j] += l2.val
            else:
                r.append(l2.val)
            l2 = l2.next
            j += 1

        for i in range(len(r) - 1):
            if r[i] >= 10:
                r[i] -= 10
                r[i + 1] += 1

        if r[-1] >= 10:
            r[-1] -= 10
            r.append(1)

        return r
