/*
ให้เขียนเกมส์ทายตัวเลขสำหรับผู้เล่นสองคน โดยมีเงื่อนไขดังนี้
- ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนแรกพิมพ์เลข ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
- ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก
- ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
- หากทายถูกใก้แÿดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย
ใช้ loop do while ภาษา js
let secretNumber = Math.floor(Math.random() * 99) + 1;
let attempts = 0;
*/

do {
  // ให้ผู้เล่นคนแรกใส่เลข
  let playerInput = parseInt(prompt("ใส่เลขที่ต้องการทาย (1-99):"));

  // ตรวจสอบว่าเลขที่ใส่เข้ามาถูกต้องหรือไม่
  if (playerInput >= 1 && playerInput <= 99) {
    attempts++;
    // ตรวจสอบว่าทายถูกหรือไม่
    if (playerInput === secretNumber) {
      console.log("ถูกต้อง! คำตอบคือ " + secretNumber);
      console.log("จำนวนครั้งที่ทาย: " + attempts);
      break;
    } else {
      console.log(playerInput > secretNumber ? "มากเกินไป!" : "น้อยเกินไป!");
    }
  } else {
    console.log("กรุณาใส่เลขในช่วง 1-99");
  }
} while (true);
