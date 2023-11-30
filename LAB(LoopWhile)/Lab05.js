/**
ให้เขียนโค้ดเพื่อหาผลรวมของเลขโดด
- รับค่าตัวเลขจากผู้ใช้งาน
- แสดงผลลัพธ์เปี่นผลรวมของเลขแต่ละหลัก
- เช่น
- ผู้ใช้งานกรอกตัวเลข 1150 ให้แสดงผลลัพธ์ 7 (1+1+5+0 = 7)
- ผู้ใช้งานกรอกตัวเลข 123456789 ให้แสดงผลลัพธ์ 55 (1+2+3+4+5+6+7+8+9 = 45) 
 */
// รับค่าตัวเลขจากผู้ใช้
let userInput = parseInt(prompt("กรุณากรอกตัวเลข:"));

// เริ่มต้นตัวแปรผลรวม
let sumOfDigits = 0;

// ใช้ while loop เพื่อหาผลรวมของเลขแต่ละหลัก
while (userInput !== 0) {
    sumOfDigits += userInput % 10; // เพิ่มเลขโดดล่าสุดในผลรวม
    userInput = Math.floor(userInput / 10); // ตัดเลขโดดล่าสุดออก
}

// แสดงผลลัพธ์
console.log("ผลรวมของเลขโดดคือ " + sumOfDigits);