class Solution:
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        weed = set()
        for i, c in enumerate(s):
            if c not in weed:
                if s.find(c, i+1) == -1:
                    return i
                else:
                    weed.add(c)

        return -1

if __name__ == '__main__':
    r = Solution().firstUniqChar('loveleetcode')
    print(r)