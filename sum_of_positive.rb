def positive_sum(arr)
  totalSum = 0
  arr.each do |n|
    totalSum += n if n >= 0
  end
  return totalSum
end

def positive_sum(arr)
  arr.select { |n| n >= 0}.reduce(0, :+)
end

def positive_sum(arr)
  arr.select(&:positive?).sum
end

positive_sum([1,2,3,4,5]
