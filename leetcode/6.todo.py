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

        if l % step != 0:
            s += (step - l % step) * C

        count = int(len(s) / step)

        r = ''

        for i in range(step):
            for j in range(count):
                t1 = s[step * j + i]

                t2 = ''
                if numRows <= i:
                    t2 = s[step * j + (step - i)]
                print(numRows ,i ,step,t2)

                if t1 != '*':
                    r += t1
                if t2 != '*':
                    r += t2

        return r


if __name__ == '__main__':

    r = Solution().convert("PAYPALISHIRING", 3)

    print(r)
    print('PAHNAPLSIIGYIR')
