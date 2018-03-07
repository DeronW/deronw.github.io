class Solution:
    def intersection(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        s1, s2 = set(nums1), set(nums2)
        return list(s1.intersection(s2))
        
if __name__ == '__main__':
    a = [1,2,2,1]
    b = [2,2]
    r = Solution().intersection(a,b)
    print(r)