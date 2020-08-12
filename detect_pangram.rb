def panagram?(string)
  new_string = string.downcase.gsub(/[^a-z]/, "")
  unique = new_string.split("").sort.uniq
  unique.length == 26
end

def panagram?(string)
  ('a'..'z').all? { |alpha| string.downcase.include? (alpha) }
end

def panagram?(string)
  string.downcase.scan(/[a-z]/).uniq.size == 26
end

panagram?("The quick brown fox jumps over the lazy dog.")
