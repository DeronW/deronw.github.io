class Solution:
    def maxAreaOfIsland(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        r = 0
        ROW = len(grid)
        COLUMN = len(grid[0])

        def cal(i, j):

            if grid[i][j] == 0:
                return 0

            v = 1
            grid[i][j] = 0

            if i > 0:
                v += cal(i - 1, j)
            if i < ROW - 1:
                v += cal(i + 1, j)
            if j > 0:
                v += cal(i, j - 1)
            if j < COLUMN - 1:
                v += cal(i, j + 1)

            return v

        for row in range(ROW):
            for col in range(COLUMN):
                v = cal(row, col)
                if v > r:
                    r = v

        return r

if __name__ == '__main__':
    p = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]
    r = Solution().maxAreaOfIsland(p)
    print(r)