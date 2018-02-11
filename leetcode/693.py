class Solution(object):
    def hasAlternatingBits(self, n):
        """
        :type n: int
        :rtype: bool
        """
        t = n ^ n >> 1
        return t + 1 ^ t == t + t + 1

if __name__ == '__main__':
    r = Solution().hasAlternatingBits(7)
    print(r)