
class Solution:
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        r = 0

        p1, p2 = 0, len(height) - 1

        while p1 < p2:
            s = (p2 - p1) * min(height[p1], height[p2])
            r = max(r, s)
            if height[p1] > height[p2]:
                p2 -= 1
            else:
                p1 += 1

        return r


if __name__ == '__main__':
    r = Solution().maxArea([1, 1])
    print(r),
