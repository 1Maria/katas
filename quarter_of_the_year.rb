def quarter_of(month)
  if month <= 3
    return 1
  elsif month <= 6
    return 2
  elsif month <= 9
    return 3
  else
    return 4
  end
end


def quarter_of(month)
   (month/3.0).ceil
end
