import math

class Solution:
    def constructRectangle(self, area):
        """
        :type area: int
        :rtype: List[int]
        """
        flag = math.sqrt(area)
        for i in range(math.floor(flag), 0, -1):
            x = area / i
            if x % 1 == 0:
                return  int(x), int(area / x)

if __name__ == '__main__':
    r = Solution().constructRectangle(6)
    print(r)