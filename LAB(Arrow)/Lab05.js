/**5. Day to Second
ให้เขียนฟังก์ชันสำหรับแปลงจำนวนวันเป็นวินาที */
                                //วัน  ชม.  นาที  วินาที
const daysToSeconds = (days) => days * 24 * 60 * 60;

const numberOfDays = 1;
const seconds = daysToSeconds(numberOfDays);
console.log(`${numberOfDays} วัน เท่ากับ ${seconds} วินาที`);
