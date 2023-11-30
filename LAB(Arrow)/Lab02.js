/**ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่
ในรูปแบบ Arrow Function
 */
const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

console.log(isPrime(7));   // true
console.log(isPrime(10));  // false