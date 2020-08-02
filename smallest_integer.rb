def find_smallest_int(arr)
  return arr.min()
end

def find_smallest_int(arr)
  arr.sort!
  arr[0]
end

find_smallest_int([78,56,232,12,8])
