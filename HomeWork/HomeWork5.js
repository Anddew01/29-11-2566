/**10. Factorial
ให้เขียนฟังก์ชันคำนวณค่า factorial */
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
const number = 5;
const result = factorial(number);

console.log(`ค่า factorial ของ ${number} คือ ${result}`);
