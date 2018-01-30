class Solution:
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :rtype: int
        """
        p = 0

        for i in nums:
            if i == val:
                pass
            else:
                nums[p] = i
                p += 1
        # nums = nums[:p]
        return p

if __name__ == '__main__':
    nums = [1,2,3,7,7,7,7,7,7]
    r = Solution().removeElement(nums, 7)
    print(r, nums)