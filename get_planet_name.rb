def get_planet_name(id)
  planets = {
    1 => "Mercury",
    2 => "Venus",
    3 => "Earth",
    4 => "Mars",
    5 => "Jupiter",
    6 => "Saturn",
    7 => "Uranus",
    8 => "Neptune"
  }
  return planets[id]
end

def get_planet_name(id)
  case id
    when 1
      "Mercury"
    when 2
      "Venus"
    when 3
      "Earth"
    when 4
      "Mars"
    when 5
      "Jupiter"
    when 6
      "Saturn"
    when 7
      "Uranus"
    when 8
      "Neptune"
  end
end

def get_planet_name(id)
  planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
  return planets[id-1]
end

get_planet_name(2)
