
class Solution:

    def fizzBuzz(self, n):
        r = []
        for i in range(1, n+1):
            if i % 15 == 0:
                r.append('FizzBuzz')
            elif i % 3 == 0:
                r.append('Fizz')
            elif i % 5 == 0:
                r.append('Buzz')
            else:
                r.append(str(i))

        return r


if __name__ == '__main__':
    r = Solution().fizzBuzz(15)
    print(r)
