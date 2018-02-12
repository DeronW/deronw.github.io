class Solution:
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums.sort()
        nums.append(0.1)
        
        for i in range(0,len(nums),2):
            if nums[i] != nums[i+1]:
                return nums[i]