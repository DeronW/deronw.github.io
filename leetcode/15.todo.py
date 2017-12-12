class Solution:
    def threeSum(self, nums):
        r = []
        d = {}

        for i in nums:
            if d.get(i):
                d[i] += 1
            else:
                d[i] = 1

        for i in d:
            for j in d:
                trd = 0 - i - j
                if d.get(trd):
                    if i == j:
                        if d[i] == 1:
                            continue
                        if i == j == trd and d[i] < 3:
                            continue
                    elif trd == i and d[i] == 1:
                        continue
                    elif trd == j and d[j] == 1:
                        continue

                    t = [i, j, trd]
                    t.sort()

                    if not t in r:
                        r.append(t)

        return r


if __name__ == '__main__':
    p = [-1, 0, 1, 2, -1, -4]
    r = Solution().threeSum(p)
    print(r)
