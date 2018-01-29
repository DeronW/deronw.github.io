class ListNode:
    def __init__(self, v, n = None):
        self.val = v
        self.next = n

def log(n):
    p = []
    while n:
        p.append(n.val)
        n = n.next
    print(p)

class Solution:

    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """

        new_head = head.next if head and head.next else head

        hinge = None
        previous = None
        
        while head and head.next:
            hinge = head.next
            head.next = hinge.next
            hinge.next = head
            head = head.next
            if previous:
                previous.next = hinge
            previous = hinge.next

        return new_head

if __name__ == '__main__':

    head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5, ListNode(6, ListNode(7)))))))
    
    r = Solution().swapPairs(head)
    print('========= result')
    log(r)