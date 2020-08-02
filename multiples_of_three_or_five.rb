def solution(number)
  sum = []
  (number - 1).downto(0).each do
    |test_number|
    if test_number % 5 == 0 || test_number % 3 == 0
        sum << test_number
    end
  end
  return sum.reduce :+
end

def solution(number)
  sum_of_multiples = 0
  number.times do |i|
    if i % 5 == 0 || i % 3 == 0
      sum_of_multiples += i
    end
  end
  sum_of_multiples
end

def solution(number)
  divisors = []
  (1...number).all? { |num| num % 3 == 0 || num % 5 == 0 ? divisors << num : divisors }
  divisors.sum
end

def solution(number)
  (1...number).select { |num| num % 3 == 0 || num % 5 == 0 }.sum
end


solution(10) # 23
