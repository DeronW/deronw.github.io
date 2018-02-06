class Solution:
    def calPoints(self, ops):
        """
        :type ops: List[str]
        :rtype: int
        """

        goals = []

        for i in ops:
            if i == '+':
                t_1, t_2 = None, None
                for j in range(len(goals)-1, -1, -1):
                    if goals[j] is not None:
                        if t_1 is None:
                            t_1 = goals[j]
                        elif t_2 is None:
                            t_2 = goals[j]
                            break;
                if t_1 and t_2:
                    goals.append(t_1 + t_2)
            elif i == 'D':
                t = None
                for j in range(len(goals)-1, -1, -1):
                    if goals[j] is not None:
                        t = goals[j]
                        break
                goals.append(t * 2)
            elif i == 'C':
                for j in range(len(goals)-1, -1, -1):
                    if goals[j] is not None:
                        goals[j] = None
                        break
            else:
                goals.append(int(i))

            print(goals)

        return sum([x for x in goals if x is not None])
        

if __name__ == '__main__':
    a = ["5","2","C","D","+"]
    b = ["5","-2","4","C","D","9","+","+"]
    c = ["-60","D","-36","30","13","C","C","-33","53","79"]
    r = Solution().calPoints(c)
    print(r)