function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

function factorial(num) {
  if (num === 1) return 1; //stop gap
  return num * factorial(num - 1);
}

/*
Pitfall 
1. No returning stop gap
2. Forget to increment or decrement the recursive call
   // infinite loop => stack overflow

*/