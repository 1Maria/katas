def zero_fuel(distance, mpg, fuel_left)
  if fuel_left * mpg >= distance
    return true
  else
    return false
  end
end

def zero_fuel(distance, mpg, fuel_left)
   return mpg * fuel_left >= distance ? true : false
end

def zero_fuel(distance, mpg, fuel_left)
  if (distance.to_f/mpg).ceil <= fuel_left
    return true
  else
    return false
  end
end

def zero_fuel(distance, mpg, fuel_left)
  return (distance.to_f/mpg).ceil <= fuel_left ? true : false
end

zeroFuel(50, 25, 2)
