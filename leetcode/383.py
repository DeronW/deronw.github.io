class Solution:
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        
        d = {}
        for i in magazine:
            if d.get(i):
                d[i] += 1
            else:
                d[i] = 1
            
        for i in ransomNote:
            if d.get(i):
                d[i] -= 1
            else:
                return False
        else:
            return True

if __name__ == '__main__':
    r = Solution().canConstruct('aa', 'aab')
    print(r)