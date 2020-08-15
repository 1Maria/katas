def longest(a1, a2)
  str = a1 + a2
  str.split('').uniq.sort.join('')
end

def longest(a1, a2)
  (a1 + a2).split('').uniq.sort.join
end

def longest(a1, a2)
  (a1 + a2).chars.uniq.sort.join
end

def longest(a1, a2)
  (a1 + a2).chars.sort.join.squeeze
end

longest("aretheyhere", "yestheyarehere")
