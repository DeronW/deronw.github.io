class Solution:
    def isMatch(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: bool
        """
        r = False
        
        blocks = []
        
        len_p = len(p)
        i = 0
        while i < len_p:
            if i < len_p - 1 and p[i+1] == '*':
                b = p[i:i+2]
                i += 2
            else:
                b = p[i]
                i += 1
            blocks.append(b)
            
        pointer = 0
        len_block = len(blocks)
        
        for i in s:
            if pointer == len_block:
                break
                
            if blocks[pointer] == '.*':
                # TODO
                r = True
                break
            elif blocks[pointer] == '.':
                pointer += 1
            elif blocks[pointer][-1] == '*':
                if i != blocks[pointer][0]:
                    pointer += 1
            elif i == blocks[pointer]:
                pointer += 1
            else:
                break
        else:
            if pointer == len_block:
                r = True
                
        print(s, blocks, pointer, len_block)
        
        return r
        
        
if __name__ == '__main__':
    print(Solution().isMatch('aa', 'a'))
    print(Solution().isMatch('aa', 'aa'))
    print(Solution().isMatch('aaa', 'aa'))
    print(Solution().isMatch('aaa', 'a*'))
    print(Solution().isMatch('aa', 'a.'))
    print(Solution().isMatch('ab', '.*'))
    print(Solution().isMatch('aab', 'a*b*c*'))
    print(Solution().isMatch('ab', '.*c'))
