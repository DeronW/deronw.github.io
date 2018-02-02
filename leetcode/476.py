class Solution:
    def findComplement(self, num):
        """
        :type num: int
        :rtype: int
        """
        return num ^ (2 ** (len(bin(num)) - 2) - 1)

if __name__ == '__main__':
    r = Solution().findComplement(8)
    print(r)