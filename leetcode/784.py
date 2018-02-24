class Solution:
    def letterCasePermutation(self, S):
        """
        :type S: str
        :rtype: List[str]
        """
        
        r = ['']

        for i in S:
            if '0' <= i <= '9':
                for j in range(len(r)):
                    r[j] += i
            else:
                r *= 2
                for j in range(int(len(r) / 2)):
                    r[j] += i.lower()
                    r[-1-j] += i.upper()

        return r

if __name__ == '__main__':
    r = Solution().letterCasePermutation('a12b')
    print(r)