class Solution:
    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """

        nums.sort()

        r = float('-INF')

        for i, _ in enumerate(nums):
            p1, p2 = i + 1, len(nums) - 1
            while p1 < p2:
                s = nums[i] + nums[p1] + nums[p2]            
                t = target - s
                if abs(t) < abs(target-r):
                    r = s

                if t < 0:
                    p2 -= 1
                else:
                    p1 += 1
        return r

if __name__ == '__main__':
    r = Solution().threeSumClosest([0,2,1,-3],1)
    print(r)