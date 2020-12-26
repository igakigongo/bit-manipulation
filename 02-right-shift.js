let x = 5, y = 2;

// intend to right shift a number y times - which means x = x / 2 ^ y
// do not forget that this is integer division (so do not think about remainders)

while (y--){
  x = x >> 1;
}

console.log(x);
console.log(x.toString(2));
