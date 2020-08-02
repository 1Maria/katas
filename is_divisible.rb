# def is_divisible(n, x, y)
#   puts (n % x == 0 && n % y == 0) ? 'true' : 'false'
# end

def is_divisible(n, x, y)
  return (n % x == 0 && n % y == 0) ? true : false
end

is_divisible(3, 3, 4)
is_divisible(12, 3, 4)
