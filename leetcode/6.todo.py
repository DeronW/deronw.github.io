class Solution:
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """

        C = '*'
        l = len(s)
        step = numRows * 2 - 2
        
        if numRows == 1:
            return s

        if l % step != 0:
            s += (step - l % step) * C

        count = int(len(s) / step)

        r = ''

        for i in range(numRows):
            for j in range(count):
                t1 = s[step * j + i]

                t2  = ''
                d = step - i
                if step > d > i:
                    t2 = s[step * j + d]

                if t1 != '*':
                    r += t1
                if t2 != '*':
                    r += t2

        return r
