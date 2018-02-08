class Solution:
    def findLUSlength(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: int
        """

        def find(short, long):
            ls = len(short)

            for i in range(ls, 0, -1):
                for j in range(ls - i + 1):
                    if long.find(short[j:j+i]) == -1:
                        return i
            return -1

        la, lb = len(a), len(b)

        if la > lb:
            return la
        elif la < lb:
            return lb
        else:
            return find(a, b)

if __name__ == '__main__':
    a = ['aba', 'cdc']
    b = ["aefawfawfawfaw", "aefawfeawfwafwaef"]
    r = Solution().findLUSlength(b[0], b[1])
    print(r)