def nb_year(p0, percent, aug, p)
   percent = percent/100.00
   p percent
   num_years = 0

   until p0 >= p
     # p p0
     # p percent
     p0 = (p0 + (p0 * percent) + aug).to_i
     # p p0
     num_years += 1
   end

   p num_years
end

nb_year(1500, 5, 100, 5000) #15
nb_year(1500000, 2.5, 10000, 2000000) #10
