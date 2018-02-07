class Solution:
    def islandPerimeter(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        s = 0
        for row in range(0, len(grid)):
            for column in range(0, len(grid[0])):
                if grid[row][column] == 1:
                    if column == 0 or grid[row][column-1] == 0:
                        s += 1
                    if column == len(grid[0]) -1 or grid[row][column+1] == 0:
                        s += 1

        for column in range(0, len(grid[0])):
            for row in range(0, len(grid)):
                if grid[row][column] == 1:
                    if row == 0 or grid[row-1][column] == 0:
                        s += 1
                    if row == len(grid) -1 or grid[row+1][column] == 0:
                        s += 1
        return s

if __name__ == '__main__':
    r = Solution().islandPerimeter([
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0]])
    print(r)
