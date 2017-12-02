
class Solution:
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """

        l = len(height)
        delta = [l]

        level = 1
        sum = 0
        biggest_sum = 0
        biggest_level = 0

        while True:
            d = 0

            for i in range(l):
                if height[i] >= level:
                    d += 1

            if d < 2:
                break

            sum += 2*d - delta[-1]
            level += 1

            delta.append(d)

            if sum > biggest_sum:
                biggest_sum = sum
                biggest_level = level
                
        r = []
        for i in range(l):
            if height[i] >= level - 1:
                r.append(i)

        print(l, delta, r)

        return (r[0], r[-1])

if __name__ == '__main__':
    r = Solution().maxArea([1,2,3])
    print(r)