def get_grade(s1, s2, s3)
  sumNum = s1 + s2 + s3
  meanNum = sumNum / 3

  if ((90 <= meanNum) && (meanNum <= 100))
    puts 'A'
  elsif ((80 <= meanNum) && (meanNum < 90))
    puts 'B'
  elsif ((70 <= meanNum) && (meanNum < 80))
    puts 'C'
  elsif ((60 <= meanNum) && (meanNum < 70))
    puts 'D'
  else
    puts 'F'
  end
end

get_grade(70, 70, 100)
