class Solution:
    def myAtoi(self, s):
        """
        :type str: str
        :rtype: int
        """

        blocks = []
        t = ''
        
        for i in s:
            if i == '-' or i == '+':
                blocks.append(t)
                t = i
            elif i == ' ':
                pass
            elif '0' <= i <= '9':
                t += i
            else:
                return 0
                
        if t:
            blocks.append(t)
                            
        print(blocks)
        
        sum = 0
        for i in blocks:
            if not i or i == '-' or i == '+':
                pass
            else:
                sum += float(i)
                
        return int(sum)
        
        
if __name__ == '__main__':
    r = Solution().myAtoi('  -0012a42')
    print(r)