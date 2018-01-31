
class Solution:

    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        c = 0
        d = x ^ y

        while d:
            if d % 2:
                c += 1
            d = d >> 1

        return c


if __name__ == '__main__':
    r = Solution().hammingDistance(1, 4)
    print(r)
