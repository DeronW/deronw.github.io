class Solution:
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """

        PAIR = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        arr = []

        for i in s:
            if i in ('(', '[', '{'):
                arr.append(i)
            elif arr and arr[-1] == PAIR[i]:
                arr.pop()
            else:
                break
        else:
            if not arr:
                return True

        return False

if __name__ == '__main__':
    Solution().isValid('()')