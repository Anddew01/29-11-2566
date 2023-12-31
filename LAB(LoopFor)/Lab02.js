/**
 * ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี้
- หาผลรวมตัวเลขทุกตัว
- หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
- หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 +
6^2 + ...)
 */
let sumAll = 0;
let sumEven = 0;
let sumOdd = 0;
let sumSquareEvenDivisibleBy3 = 0;

for (let i = 1; i <= 100; i++) {
  // หาผลรวมตัวเลขทุกตัว
  sumAll += i;

  // หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }

  // หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2
  if (i % 2 === 0) {
    sumSquareEvenDivisibleBy3 += Math.pow(i, 2);
  }
}

console.log("ผลรวมทั้งหมด: " + sumAll);
console.log("ผลรวมเฉพาะเลขคู่: " + sumEven);
console.log("ผลรวมเฉพาะเลขคี่: " + sumOdd);
console.log("ผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2: " + sumSquareEvenDivisibleBy3);
