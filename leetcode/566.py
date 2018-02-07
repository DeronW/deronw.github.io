class Solution:
    def matrixReshape(self, nums, r, c):
        """
        :type nums: List[List[int]]
        :type r: int
        :type c: int
        :rtype: List[List[int]]
        """
        if r * c != len(nums) * len(nums[0]):
            return nums

        a = []
        for row in nums:
            a.extend(row)

        b = []
        for i in range(0, r):
            b.append(a[i*c:(i+1)*c])

        return b

if __name__ == '__main__':
    r = Solution().matrixReshape([[1,2],[3,4]], 1, 4)
    print(r)