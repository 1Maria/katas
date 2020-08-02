def differenceInAges(ages)
  ages.sort!
  puts ages
  difference = (ages.last) - (ages.first)
  puts [ages.first, ages.last, difference]
end

differenceInAges([82, 15, 6, 38, 35])
