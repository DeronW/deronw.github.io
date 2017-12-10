class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """

        l1, l2 = len(nums1), len(nums2)
        l = l1 + l2
        delta = int((l1 + l2) / 2) + 1

        a, b = 0, 0

        if nums1[0] > nums2[0]:
            nums1, nums2 = nums2, nums1

        if nums1[-1] <= nums2[0]:
            nums1.extend(nums2)
            a = nums1[delta - 1] if l % 2 else nums1[delta - 2]
            b = nums2[delta - 1 - l1]
        else:
            p1, p2 = 0, 0
            # pa_at, pb_at = '1', '1'

            while p1 + p2 + 2 < delta:
                if nums1[p1] > nums2[p2]:
                    p1 += 1
                elif nums1[p1] < nums2[p2]:
                    p2 += 1
                else:
                    if nums1[p1 + 1] < nums2[p2 + 1]:
                        p1 += 1
                    else:
                        p2 += 1

            a, b = nums1[p1], nums2[p2]

        print("a={0}, b={1}, delta={2}".format(a, b, delta))

        return (a + b) / 2


if __name__ == '__main__':
    a, b = [1, 2, 3], [4, 5, 6]

    a1, b1 = [1, 3], [2, 4]
    a2, b2 = [1, 3], [2, 3]
    a3, b3 = [1, 3], [2, 2]

    r = Solution().findMedianSortedArrays(a1, b1)
    print(r)
