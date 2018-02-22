"""
# Employee info
class Employee:
    def __init__(self, id, importance, subordinates):
        # It's the unique id of each node.
        # unique id of this employee
        self.id = id
        # the importance value of this employee
        self.importance = importance
        # the id of direct subordinates
        self.subordinates = subordinates
"""
class Solution:
    def getImportance(self, employees, id):
        """
        :type employees: Employee
        :type id: int
        :rtype: int
        """
        
        c = 0

        d = {}

        for i in employees:
            d[i.id] = i

        ids = [id]
        
        while ids:
            t = d[ids.pop()]
            c += t.importance
            ids.extend(t.subordinates)

        return c