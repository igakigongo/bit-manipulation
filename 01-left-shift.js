const shiftLeft = (number, times) => {
  let num = number;
  while(times--){
    num = num << 1;
  }
  return num;
}

export default shiftLeft;
