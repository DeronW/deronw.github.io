# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        
        points = []
        c = 0
        
        node = head
        
        while node:
            points.append(node)
            c += 1
            node = node.next
                
        if c - n == 0:
            return head and head.next
        else:
            points[c - n - 1].next = points[c-n].next if n > 0 else None
            return head
        
if __name__ == '__main__':
    n1 = ListNode(1)
    n2 = ListNode(2)
    n3 = ListNode(3)
    n4 = ListNode(4)
    
    n1.next = n2
    n2.next = n3
    n3.next = n4
    
    r = Solution().removeNthFromEnd(n1, 4)
    print(r)