class Solution:
    def isOneBitCharacter(self, bits):
        """
        :type bits: List[int]
        :rtype: bool
        """
        l = len(bits)
        i = 0

        while i < l - 1:
            if bits[i] == 1:
                i += 2
            else:
                i += 1
        return i != l

if __name__ == '__main__':
    p = [1,0,0]
    p1 = [1, 0, 1, 0]
    p2 = [1,1,0]
    p3 = [0,0]

    r = Solution().isOneBitCharacter(p3)
    print(r)