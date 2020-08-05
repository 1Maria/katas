def descending_order(n)
   return n.to_s.split('').sort.reverse.join('').to_i
end

# sort doesn't need parentheses
def descending_order(n)
  n.digits.sort().reverse.join.to_i
end

def descending_order(n)
  n.digits.sort.reverse.join.to_i
end

descending_order(0)
