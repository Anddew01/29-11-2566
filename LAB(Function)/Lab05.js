/*
printPrime
- ให้สร้างฟังก์ชันรับรับพารามิเตอร์เป็นตัวเลข
- แสดง Prime number ทั้งหมด โดยแสดงตั้งแต่ 2 ถึงตัวเลขที่รับมาเป็นพารามิเตอร์
printPrime(7) // 2, 3, 5, 7
printPrime(13) // 2, 3, 5, 7, 11, 13
printPrime(14) // 2, 3, 5, 7, 11, 13
 */
function printPrime(maxNumber) {
    for (let number = 2; number <= maxNumber; number++) {
        if (isPrime(number)) {
            console.log(number);
        }
    }
}
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
printPrime(7);  
printPrime(13); 
printPrime(14); 
