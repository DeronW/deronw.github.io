class Solution:
    def numJewelsInStones(self, J, S):
        """
        :type J: str
        :type S: str
        :rtype: int
        """
        d = {}
        
        for i in S:
            if d.get(i):
                d[i] += 1
            else:
                d[i] = 1
        
        c = 0

        for i in J:
            if d.get(i):
                c += d.get(i)
        return c

if __name__ == '__main__':
    r = Solution().numJewelsInStones("aA", "aAAbbbb")
    print(r)