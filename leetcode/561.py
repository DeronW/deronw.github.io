class Solution:
    def arrayPairSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums.sort()
        s = 0
        for i in range(0, len(nums), 2):
            s += nums[i]

        return s


if __name__ == '__main__':
    r = Solution().arrayPairSum([1,4,3,2])
    print(r)