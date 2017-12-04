class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        if nums1[0] > nums2[0]:
            nums1, nums2 = nums2, nums1
        
        l1, l2 = len(nums1), len(nums2)
        
        odd = (l1 + l2) % 2
        m = int((l1 + l2 + 2) / 2)
        
        print('--------')
        print(odd)
        print(m)
        
        if nums1[-1] <= nums2[0]:
            if l1 >= m - 1:
                p1 = nums1[m - 2]
            else:
                p1 = nums2[l2 + l1 - m - 2]
                
            if l1 >= m:
                p2 = nums1[m - 1]
            else:
                p2 = nums2[m - l1 - 1]
                
            return  p2 if odd else (p1 + p2) / 2
        

        
        d, p1, p2 = -m, 0, 0
        
        while True:
            if num1[p1] < nums2[p2]:
                tmp_d = int(d / 2)
                if d > 0:
                    p2 -= tmp_d
                elif d < 0:
                    p1 += tmp_d
                else:
                    pass
            
            if d = 0 and nums[p2 -1] < nums1[p1] < nums2[p2]:
                break
        
        
if __name__ == '__main__':
    a = [1,2]
    b = [3,5, 6 ]
    print(Solution().findMedianSortedArrays(a, b))
