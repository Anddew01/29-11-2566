/**
จํานวนเฉพาะ (Prime Number) คือจํานวนเต็มบวกที่มากกว่า 1
และมีตัวหารลงตัวที่เป็นจํานวนเต็มบวกอยู่แค่ 2 ตัวก็คือ 1 และตัวมันเอง
เช่น
เลข 17 เป็นจํานวนเฉพาะ เพราะมีแค่ 1 และ 17 เท่านั้นที่สามารถหารเลข 17 ลงตัว
เลข 23 เป็นจํานวนเฉพาะ เพราะมีแค่ 1 และ 23 เท่านั้นที่สามารถหารเลข 23 ลงตัว
เลข 24 ไม่เป็นจํานวนเฉพาะ เพราะมี 1,2,4,6,8,12,24 ที่สามารถหารเลข 24 ลงตัว
TASK : ให้เขียนแสดงเพื่อหาจํานวนเฉพาะในช่วง 1 ถึง 100 
*/

// ตรวจสอบว่าตัวเลขเป็นจำนวนเฉพาะหรือไม่
function isPrimeNumber(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  for (let i = 1; i <= 100; i++) {
    if (isPrimeNumber(i)) {
      console.log(`${i} เป็นจำนวนเฉพาะ`);
    }
  }
  