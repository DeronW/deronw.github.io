class Solution:
    def countPrimeSetBits(self, L, R):
        """
        :type L: int
        :type R: int
        :rtype: int
        """

        r = 0

        def is_prime(n):
            if n <= 1:
                return False
            i = 2
            while i*i <= n:
                if n % i == 0:
                    return False
                i += 1
            return True

        for i in range(L, R + 1):
            if is_prime(bin(i).count('1')):
                r += 1

        return r

if __name__ == '__main__':
    r = Solution().countPrimeSetBits(6, 10)
    print(r)