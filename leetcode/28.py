class Solution:
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """

        if needle == '':
            return 0

        nl = len(needle)

        def match(offset):
            flag = False

            if nl <= len(haystack) - offset:
                for i in range(nl):
                    # print(i, offset+i, haystack[offset+i], needle[i])
                    if haystack[offset+i] != needle[i]:
                        break
                else:
                    flag = True

            return flag

        for i in range(len(haystack)):
            if match(i):
                return i
        else:
            return -1

if __name__ == '__main__':
    r = Solution().strStr("mississippi", "issip")
    print(r)