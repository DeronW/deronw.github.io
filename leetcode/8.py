class Solution:
    def myAtoi(self, s):
        """
        :type str: str
        :rtype: int
        """
        r = 0
        tmp = ''

        for i in s:
            if i == ' ':
                if tmp:
                    break
                else:
                    continue
            elif i == '-' or i == '+':
                if tmp == '-' or tmp == '+':
                    break
                else:
                    if tmp:
                        r += int(tmp)
                    tmp = i
            elif '0' <= i <= '9':
                tmp += i
            else:
                break

        if tmp and tmp != '-' and tmp != '+':
            r += int(tmp)

        return max(-2147483648, min(r, 2147483647))


if __name__ == '__main__':
    r = Solution().myAtoi('   010')
    print(r)
