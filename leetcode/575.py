class Solution:
    def distributeCandies(self, candies):
        """
        :type candies: List[int]
        :rtype: int
        """
        obj = {}

        for i in candies:
            if obj.get(i):
                obj[i] += 1
            else:
                obj[i] = 1

        return int(min(sum(obj.values()) / 2, len(obj.keys())))

if __name__ == '__main__':
    a = [1,1,2,2,3,3]
    b = [1,1,2,3]
    r = Solution().distributeCandies(b)
    print(r)