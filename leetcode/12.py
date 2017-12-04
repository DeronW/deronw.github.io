class Solution:
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """

        r = ''

        while num > 0:
            if num >= 1000:
                r += 'M' * int(num / 1000)
                num %= 1000
            elif num >= 900:
                r += 'CM'
                num -= 900
            elif num >= 400:
                if num < 500:
                    r += 'CD'
                    num -= 400
                else:
                    r += 'D'
                    num -= 500
            elif num >= 100:
                r += 'C' * int(num / 100)
                num %= 100
            elif num >= 90:
                r += 'XC'
                num -= 90
            elif num >= 40:
                if num < 50:
                    r += 'XL'
                    num -= 40
                else:
                    r += 'L'
                    num -= 50
            elif num >= 10:
                r += 'X' * int(num / 10)
                num %= 10
            elif num >= 9:
                r += 'IX'
                num = 0
            elif num >= 4:
                if num == 4:
                    r += 'IV'
                    num -= 4
                else:
                    r += 'V'
                    num -= 5
            elif num >= 4000:
                raise 'too big'
            else:
                r += 'I' * num
                num = 0

        return r
