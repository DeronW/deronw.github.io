class Solution:
    def findMaxConsecutiveOnes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        r = [0]
        for i in nums:
            if i:
                r[-1] += 1
            else:
                r.append(0)

        return max(r)


if __name__ == '__main__':
    r = Solution().findMaxConsecutiveOnes([1,0,1,1,0,1])
    print(r)