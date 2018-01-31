class Solution:
    def selfDividingNumbers(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: List[int]
        """

        pool = [x for x in range(left, right + 1)]
        pool_str = [str(x) for x in pool]

        for i in range(1, 10):
            s = str(i)
            for index, n in enumerate(pool):
                if n and s in pool_str[index]:
                    if pool[index] % i != 0 or '0' in pool_str[index]:
                        pool[index] = None
      
        return [x for x in pool if x is not None]

if __name__ == '__main__':
    r = Solution().selfDividingNumbers(1, 22)
    print(r)