class Solution:
    def titleToNumber(self, s):
        """
        :type s: str
        :rtype: int
        """
        
        ALPHA = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ'

        n, l = 0, len(s)
        for i in range(l):
            n += ALPHA.find(s[l-i-1]) * (26 ** i)
        return n

if __name__ == '__main__':
    r = Solution().titleToNumber('A')
    print(r)