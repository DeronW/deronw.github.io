class Solution:
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """

        data = {
            'M': 1000,
            'D': 500,
            'C': 100,
            'L': 50,
            'X': 10,
            'V': 5,
            'I': 1
        }

        r = 0
        i = 0

        while i < len(s):
            if i == len(s) - 1:
                r += data[s[i]]
                i += 1
            elif data[s[i]] >= data[s[i + 1]]:
                r += data[s[i]]
                i += 1
            else:
                r += data[s[i + 1]] - data[s[i]]
                i += 2

        return r
