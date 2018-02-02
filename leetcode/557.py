class Solution:
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        r = []
        for i in s.split(' '):
            r.append(i[::-1])

        return ' '.join(r)

if __name__ == '__main__':
    r = Solution().reverseWords("Let's take LeetCode contest")
    print(r)