class Solution:
    def checkPossibility(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        l = len(nums)

        if l < 3:
            return True

        p = -1

        for i in range(l-1):
            if nums[i] > nums[i+1]:
                if p > -1:
                    return False
                else:
                    p = i + 1
        
        if p == -1 or p == 1 or p == l - 1:
            return True
        elif nums[p] >= nums[p-2] and nums[p+1] >= nums[p]:
            return True
        elif nums[p] < nums[p-2] and nums[p+1] >= nums[p-1]:
            return True
        else:
            return False

if __name__ == '__main__':
    p = [4,2,3]
    p1 = [3,4,2,3]
    p2 = [1,2,3]
    p4 = [4,2,1]


    r = Solution().checkPossibility(p2)
    print(r)