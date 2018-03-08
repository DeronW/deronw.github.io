class Solution:
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        return len(nums) != len(set(nums))

if __name__ == '__main__':
    r = Solution().containsDuplicate([1,3])
    print(r)