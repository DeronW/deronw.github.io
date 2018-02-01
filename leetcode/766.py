class Solution:
    def isToeplitzMatrix(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: bool
        """

        sample = [x[0] for x in matrix]
        sample.reverse()
        sample.pop()
        sample.extend(matrix[0])

        w = len(matrix[0])
        h = len(matrix)

        for i, row in enumerate(matrix):
            for j, n in enumerate(row):
                if n != sample[h-i+j-1]:
                    return False

        return True

if __name__ == '__main__':
    a = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
    b = [[11,74,0,93],[40,11,74,7]]
    r = Solution().isToeplitzMatrix(b)
    print(r)