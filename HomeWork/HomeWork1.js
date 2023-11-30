/* 
LAB-9 : Challenge
- เขียนโปรแกรมสำหรับรับตัวเลขจากผู้ใช้งาน 3 ตัวเลข
- แสดงผลลัพธ์เป็นตัวเลขที่เรียงกันจากมากไปน้อย
เช่นรับค่าเป็น -1 ,4, 0 ใĀแÿดงผลเป็น 4, 0, -1
*/
var number1 = prompt("ป้อนค่าตัวเลขที่ 1:");
var number2 = prompt("ป้อนค่าตัวเลขที่ 2:");
var number3 = prompt("ป้อนค่าตัวเลขที่ 3:");

// แปลงค่าเป็นตัวเลข
number1 = parseFloat(number1);
number2 = parseFloat(number2);
number3 = parseFloat(number3);

if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    alert("Invalid number");
} else {
    // เรียงลำดับตัวเลข
    var sortedNumbers = [number1, number2, number3].sort(function(a, b) {
        return b - a;
    });
    alert("ตัวเลขที่เรียงจากมากไปน้อย: " + sortedNumbers.join(", "));
}
