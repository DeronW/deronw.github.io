# Definition for singly-linked list.
import time

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """

        head = None

        for l in lists:
            while l:
                t = l
                l = l.next
                t.next = None

                if head is None:
                    head = t
                elif t.val < head.val:
                    t.next = head
                    head = t
                else:
                    tail = head
                    while tail.next is not None and tail.next.val < t.val:
                        tail = tail.next

                    t.next = tail.next
                    tail.next = t

        return head

if __name__ == '__main__':
    a = ListNode(1)
    a.next = ListNode(0)

    b = ListNode(2)
    b.next = ListNode(-2)
    l = [
        a,
        ListNode(-3),
        ListNode(3),
        b,
        ListNode(-1)
    ]
    r = Solution().mergeKLists(l)
    while r:
        print('result', r.val)
        r = r.next
