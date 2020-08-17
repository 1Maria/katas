def find(n)
 (1..n).to_a.select { |num| num % 3 == 0 || num % 5 == 0 }.reduce(:+)
end

def find(n)
 (3..n).select { |num| num % 3 == 0 || num % 5 == 0 }.sum
end

def find(n)
 (3..n).reduce { |sum, num| num % 3 == 0 || num % 5 == 0 ? sum + num : sum}
end

def find(n)
 [*3..n].reduce { |sum, num| num % 3 == 0 || num % 5 == 0 ? sum + num : sum}
end

find(5)
