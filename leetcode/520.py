class Solution:
    def detectCapitalUse(self, word):
        """
        :type word: str
        :rtype: bool
        """

        if word == '':
            return True

        head = word[0]
        tail = word[1:]

        return tail == tail.lower() or ( head == head.upper() and tail == tail.upper() )