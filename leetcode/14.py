class Solution:
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """

        if len(strs) == 0:
            return ''

        prefix = strs[0]
        l = len(prefix)

        for s in strs:
            m = 0
            for j in range(min(l, len(s))):
                if s[j] != prefix[j]:
                    break
                m += 1
            l = m
        return prefix[:m]
