class Solution:
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        l = len(s) + len(s) - 1
        
        point1 = 0
        point2 = 0
        delta = 0

        for i in range(1,l-1):
            d = 0

            if i % 2:
                p1, p2 = i/2+1, i/2
            else:
                p1, p2 = (i + 1)/2, (i + 1)/2

            for j in range(1, min(p1 - 1, l - p1 - 1)):
                if s[p1 - j] == s[p1 + j]:
                    d += 1
                else:
                    break

            if d > delta:
                point1 = p1
                point2 = p2
                delta = d

        print(point1, point2, delta)

        return s[point1-delta:point2+delta]
        

if __name__ == '__main__':
    r = Solution().longestPalindrome('aa')
    print(r)