def no_space(x)
  current_string = x
  while current_string.include?(" ")
    current_string = current_string.sub(" ", "")
  end
  return current_string
end

def no_space(x)
  x.gsub(' ', '')
end

def no_space(x)
  x.delete(' ')
end
