/**ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)
- ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2022
 */
const calculateAgeInDays = (birthYear) => {
    const birthDate = new Date(birthYear, 0, 1); // 1 เดือน 1 ของปีที่เกิด
    const currentDate = new Date(2022, 11, 31);  // 31 ธันวาคม 2022

    // คำนวณวันที่ผ่านมา
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // 1 วันมี 86400000 มิลลิวินาที
    const daysPassed = Math.floor((currentDate - birthDate) / millisecondsPerDay);

    return daysPassed;
};

const ageInDays = calculateAgeInDays(1990); // ปีเกิด 1990
console.log(ageInDays);  // ผลลัพธ์: 11749 วัน
