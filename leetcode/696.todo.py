import time

s = '00110011'
s = '10101'

c = s[0]

def revert(x):
    return '0' if x == '1' else '1'
    
r = []
start = 0

while True:
    time.sleep(1)
    
    next = s.find(revert(c), start)
    if next == -1:
        break
        
    end = s.find(c, start + next + 1)
    if end == -1:
        end = len(s)
        
    
    print(c, start, next, end)
    
    for i in range(min(next-start,end-next)):
        r.append(c * (i+1) + revert(c) * (i+1))
    
    start = next
    c = revert(c)
    

print(r)
