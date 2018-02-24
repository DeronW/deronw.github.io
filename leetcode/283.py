class Solution:
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """

        l = len(nums)
        i = 0

        for _ in range(l):
            if nums[i] == 0:
                for j in range(i, l - 1):
                    nums[j], nums[j + 1] = nums[j + 1], nums[j]
            else:
                i += 1
        return nums
        

if __name__ == '__main__':
    p = [0,1,0,3,12]
    r = Solution().moveZeroes([0,0,1])
    print(r)