class Solution:
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """

        l = ''
        r = ''

        for i in s:
            if i in r:
                if len(r) > len(l):
                    l = r
                r = r[r.find(i) + 1:] + i
            else:
                r += i

        if len(l) > len(r):
            r = l

        return len(r)
