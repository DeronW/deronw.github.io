

class Solution:

    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """

        if head is None:
            return None
        elif head.next is None:
            return head
        else:
            new_head = head.next 

        clean_node = ListNode(0)

        while head.next:
            hinge = clean_node
            hinge.next = head.next
            head.next = hinge.next.next
            hinge.next.next = head
            head = head.next

        return new_head

if __name__ == '__main__':
    Solution().swapPair()

