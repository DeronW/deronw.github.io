
class Solution:

    rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']

    def findWords(self, words):
        
        r = []

        def get_row(letter):
            for index, ss in enumerate(['qwertyuiop', 'asdfghjkl', 'zxcvbnm']):
                if letter in ss:
                    return index
            else:
                raise 'Error input'

        def valid(word):
            row = get_row(word[0])
            for i in word:
                if get_row(i) != row:
                    return False
            return True

        for word in words:
            if valid(word.lower()):
                r.append(word)

        return r


if __name__ == '__main__':
    r = Solution().findWords(["Hello", "Alaska", "Dad", "Peace"])
    print(r)
