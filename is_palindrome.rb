# def is_palindrome str
#   str = str.downcase
#   puts str
#   # print str.split("").reverse.join("")
#   if str == str.split("").reverse.join("")
#     puts true
#   else
#     puts false
#   end
# end

def is_palindrome str
  str = str.downcase
  puts str
  # print str.split("").reverse.join("")
  if str == str.reverse
    puts true
  else
    puts false
  end
end

is_palindrome("abba")
is_palindrome("Abba")
is_palindrome("hello")
