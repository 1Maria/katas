var number = function(busStops){
  let initialPeople = 0;
  for (const element of busStops) {
    console.log(initialPeople);
    initalPeople = initialPeople + element[0] - element[1];
    console.log(initalPeople);
  }
  return initialPeople;
}

var number = function(busStops){
  let initialPeople = 0;
  for (const element of busStops) {
    initialPeople += (element[0] - element[1]);
  }
  return initialPeople;
}

let number = function(busStops){
  let totalPassengers = busStops.reduce(
    (acc, curr) => acc + curr[0] - curr[1], 0
  )
  console.log(totalPassengers);
}

let number = function(busStops){
  let totalPassengers = busStops.reduce(
    (remaining, [on, off]) => remaining + on - off, 0
  )
  return totalPassengers;
}

let number = function(busStops){
  return busStops.reduce(
    (remaining, [on, off]) => remaining + on - off, 0
  )
}

let number = (busStops) => busStops.reduce(
    (remaining, [on, off]) => remaining + on - off, 0
)

number([[10,0],[3,5],[5,8]]) //5
