class Solution:
    def fourSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        nums.sort()

        r = []
        
        p1, p2 = 0, len(nums) - 1
        while p1 < p2:
            p3, p4 = p1 + 1, p2 - 1
            while p3 < p4:
                t = nums[p1] + nums[p2] + nums[p3] + nums[p4]
                if t > 0:
                    p4 -= 1
                elif t < 0:
                    p3 += 1
                else:
                    r.append(nums[p1], nums[p2], nums[p3], nums[p4])
            pass
        return r
                    
        
if __name__ == '__main__':
    r = Solution().fourSum([1,0,-1,0,-2,2])
    print(r)