// find if the i-th bit in a number is set (i starts from zero upwards)
// so we need to find out if it has a value of 1

// example 5 = 101, the 0th and 2nd bits are set
let x = 5;

// solution
// left shift 1 n times and then bitwise n the result with the number.
// if it's non zero then we have that bit set there, else we do not.

//          5 => 101
// 1 ^ 2 =  2 => 010
// & result   => 000 :::: 2nd bit it not set

const twoToPower = power => {
  let b = 1;
  while(power--){
    b = b << 1;
  }
  return b;
}

for(let i = 0; i < 3; i++){
  let result = x & twoToPower(i);
  console.log(`bit in position ${i} for ${x.toString(2)} is ${result ? 'set': 'not set'}`);
}

