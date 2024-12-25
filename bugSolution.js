function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Throws an error