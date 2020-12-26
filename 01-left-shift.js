let x = 5, y = 2;

// intend to left shift a number y times - which means x = x * (2 ^ y)
// we are multiplying a number by value (derived from powers of 2)

while (y--){
  x = x << 1;
}

console.log(x);
console.log(x.toString(2));
