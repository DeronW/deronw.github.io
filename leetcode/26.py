class Solution:
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        m = None
        p = 0
        for (index, i) in enumerate(nums):
            if i == m:
                pass
            else:
                nums[p] = nums[index]
                m = i
                p += 1
        
        print(nums[:p])
        return p

if __name__ == '__main__':
    r = Solution().removeDuplicates([1,2,3,7,7,7,7,7,7])
    print(r)