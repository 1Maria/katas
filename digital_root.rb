def digital_root(n)
  return 0 if n.zero?
  1 + (n - 1) % 9
end

def digital_root(n)
  n < 10 ? n : digital_root(n / 10 + n % 10)
end

def digital_root(n)
 n < 10 ? n : digital_root(n.digits.sum)
end

digital_root(16);
