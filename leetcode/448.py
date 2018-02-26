class Solution:
    def findDisappearedNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        mother_set = [x + 1 for x in range(len(nums))]
        for i in nums:
            mother_set[i-1] = 0
        r = [x for x in mother_set if x != 0]
        r.sort()
        return r

if __name__ == '__main__':
    p = [4,3,2,7,8,2,3,1]
    r = Solution().findDisappearedNumbers(p)
    print(r)