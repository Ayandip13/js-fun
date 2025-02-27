function add(a, b) {
  return a + b;
}

function HOF(x, y, operator) {
  return operator(x, y);
}

console.log(HOF(50, 19, add));
