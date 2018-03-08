class Solution:
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        k = k % len(nums)
        new_nums = nums[-k:] + nums[:-k]
        for i in range(len(nums)):
            nums[i] = new_nums[i]

if __name__ == '__main__':
    a = [1,2]
    Solution().rotate(a, 3)
    print(a)