# original code (given)
def greet(name)
  return "Hello, #{name}!"
  return "Hello, my love!" if name == "Johnny"
end

def greet(name)
  return "Hello, my love!" if name == "Johnny"
  return "Hello, #{name}!"
end

def greet(name)
  return "Hello, " + (name == "Johnny" ? "my love" : "#{name}") + "!"
end

def greet(name)
  return "Hello, #{name == 'Johnny' ? 'my love' : name}!"
end

greet("Jim") #"Hello, Jim!"
greet("Johnny") #"Hello, my love!"
