def invert(list)
  list.map{ |el| - el }
end

def invert(list)
  list.map{ |el| 0-el }
end

def invert(list)
  list.map{ |el| el*-1 }
end

invert([1,2,3,4,5])
