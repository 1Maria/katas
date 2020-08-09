//original code (given)
function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}

function greet(name) {
  if(name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

function greet(name){
  return "Hello, " +  (name === "Johnny" ? "my love" : name) + "!";
}

function greet(name){
  if(name === "Johnny") {
    name = "my love";
  }
  return "Hello, " + name + "!";
}

greet("Jim") //"Hello, Jim!"
greet("Johnny") //"Hello, my love!"
