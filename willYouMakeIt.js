const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? true : false;
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (distanceToPump/mpg <= fuelLeft) {
    return true;
  } else {
    return false;
  }
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump/mpg <= fuelLeft ? true : false;
};


zeroFuel(50, 25, 2)
