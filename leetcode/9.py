class Solution:
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if 0 <= x < 10:
            return True
        elif x % 10 == 0:
            return False
            
        r = False
        
        n = 0
        
        while x > n:
            n = n * 10 + x % 10    
            x = int(x / 10)
        else:
            if x == n:
                r = True
            elif x > 0 and x == int(n/10):
                r = True
            
        return r
        
        
if __name__ == '__main__':
    r = Solution().isPalindrome(0)
    print(r)