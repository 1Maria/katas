function basicOp(operation, value1, value2) {
    if (operation === '+') {
      return value1 + value2;
    } else if (operation === '-') {
      return value1 - value2;
    } else if (operation === '*') {
      return value1 * value2;
    } else {
      return value1 / value2;
    }
}

function basicOp(operation, value1, value2) {
    const operations = {
      '+': (a, b) => a + b, 
      '-': (a, b) => a - b, 
      '*': (a, b) => a * b, 
      '/': (a, b) => a / b
    }
    
    return operations[operation](value1, value2);
}

function basicOp(operation, value1, value2) {
    return {
      '+': (a, b) => a + b, 
      '-': (a, b) => a - b, 
      '*': (a, b) => a * b, 
      '/': (a, b) => a / b
    }[operation](value1, value2);
}

const basicOp = (operation, value1, value2) => (
    {
      '+': (a, b) => a + b, 
      '-': (a, b) => a - b, 
      '*': (a, b) => a * b, 
      '/': (a, b) => a / b
    }[operation](value1, value2)
)

console.log((basicOp('+', 4, 7), 11));