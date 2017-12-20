class Solution:
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """

        if not digits:
            return []
        
        r = ['']
        tr = []
        
        EMNU = {
            '1': (),
            '2': ('a', 'b','c'),
            '3': ('d','e', 'f'),
            '4': ('g', 'h','i'),
            '5': ('j','k','l'),
            '6': ('m','n','o'),
            '7': ('p','q','r','s'),
            '8': ('t','u','v'),
            '9': ('w','x','y','z')
        }
        
        arr = [EMNU[x] for x in digits]
        
        for tup in arr:
            for c in tup:
                for s in r:
                    s += c
                    tr.append(s)
            r, tr = tr, []
        
        return r

if __name__ == '__main__':
    r = Solution().letterCombinations('')
    print(r)