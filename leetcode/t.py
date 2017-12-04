
if __name__ == '__main__':

    l = 999
    
    full_len = 2*l -1
    half = int(full_len/2)
    arr = [half]
    for i in range(1, arr[0]):
        arr.append(half-i)
        arr.append(half+i)
        
    print(arr)