/**ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year (ปีที่มี 366 วัน)
- leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว
- ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัวถึงจะเป็น leap yea */
const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
};
console.log(isLeapYear(2020));  // true
console.log(isLeapYear(2100));  // false
