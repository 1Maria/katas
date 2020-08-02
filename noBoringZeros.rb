def noBoringZeros(n)
  stringy = n.to_s
  puts stringy.length
  puts stringy[-1]
  #puts stringy.length
  while (stringy.length > 1) && (stringy[-1] == 0)
    last_num = stringy[-1]
    #puts "stringy"
    stringy = stringy.slice!(last_num)
    puts stringy
  end
end

noBoringZeros(1450);
#noBoringZeros(960000);
