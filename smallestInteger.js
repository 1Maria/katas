class SmallestIntegerFinder {
  findSmallestInt(args) {
    args = args.sort((a, b) => a - b);
    return args[0];
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    console.log(Math.min(...args));
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((a, b) => a < b ? a : b, args[0]);
  }
}

let smallInt = new SmallestIntegerFinder();
smallInt.findSmallestInt([78,56,232,12,8])
