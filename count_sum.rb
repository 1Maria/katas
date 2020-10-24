# 8kyu Count of positives / sum of negatives
def count_positives_sum_negatives(lst)
  if !lst || lst.length() == 0
    return []
  else
    positives = []
    negatives = []

    lst.each do |el|
      el > 0 ? positives.push(el) : negatives.push(el)
    end

    positive_count = positives.length() || 0
    negative_sum = negatives.reduce(:+) || 0

    [positive_count, negative_sum]
  end
end

# Second solution

def count_positives_sum_negatives(lst)
  return [] if !lst || lst.empty?
  [lst.count(&:positive?) || 0, lst.select(&:negative?).reduce(:+)|| 0]
end

# Refactor to use ternary operator

def count_positives_sum_negatives(lst)
  !lst || lst.empty? ? [] : [lst.count(&:positive?) || 0, lst.select(&:negative?).reduce(:+)|| 0]
end
