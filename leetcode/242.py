class Solution:
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        a, b = list(s), list(t)
        a.sort()
        b.sort()
        return a == b

if __name__ == '__main__':
    r = Solution().isAnagram("anagram", "nagaram")
    print(r)