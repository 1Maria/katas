def get_sum(a,b)
  min_val = [a, b].min
  max_val = [a, b].max
  [*min_val..max_val].reduce(:+)
end

def get_sum(a,b)
  a < b ? (a..b).reduce(:+) : (b..a).reduce(:+)
end

def get_sum(a,b)
  min_val = [a, b].min
  max_val = [a, b].max
  (max_val - min_val + 1) * (min_val + max_val) / 2
end

get_sum(0,-1)
