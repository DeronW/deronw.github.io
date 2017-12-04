class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        # quick try
        h = target / 2
        if h % 1 == 0 and h in nums:
            p = nums.index(h)
            nums[p] = None
            if h in nums:
                return p, nums.index(h)
            else:
                nums[p] = h

        for i in range(len(nums)):
            d = target - nums[i]
            if d != nums[i] and d in nums:
                return i, nums.index(d)

        raise 'no match'
