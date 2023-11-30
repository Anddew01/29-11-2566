let sum = 0;
let count = 0;

do {
  let userInput = prompt("กรุณากรอกตัวเลข (หากต้องการหยุดกรอก กรอก 0):");

  if (userInput === "0") break; // หยุด loop ถ้าผู้ใช้กรอก 0

  let number = parseFloat(userInput);

  // ตรวจสอบว่า input เป็นตัวเลขที่ถูกต้องหรือไม่
  if (!isNaN(number)) {
    sum += number;
    count++;
  } else {
    alert("กรุณากรอกตัวเลขที่ถูกต้อง");
  }

} while (true);

// คำนวณค่าเฉลี่ย
let average = count > 0 ? sum / count : 0;

console.log(`ผลรวมของเลขทั้งหมด: ${sum}`);
console.log(`ค่าเฉลี่ยของเลขทั้งหมด: ${average}`);
