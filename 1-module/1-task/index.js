function factorial(n) {
  let result = 1;
  while(n) {
      result *= n--;
  }
  return result;
}

factorial(0); 
factorial(1); 
factorial(3); 
factorial(5);