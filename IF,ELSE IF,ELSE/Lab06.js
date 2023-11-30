/**
 * จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลขเข้ามา 2 ค่า
- ให้โชว์ข้อความผลบวกของตัวเลขทั้ง 2
- หากมี input อันนึงไม่ใช้ตัวเลข ให้โชว์ข้อความ “Invalid number”
 */
var input1 = prompt("ป้อนค่าตัวเลขที่ 1:");
var input2 = prompt("ป้อนค่าตัวเลขที่ 2:");

// แปลงค่าเป็นตัวเลข
var number1 = parseFloat(input1);
var number2 = parseFloat(input2);

if (isNaN(number1) || isNaN(number2)) {
    alert("Invalid number");
} else {
    var sum = number1 + number2;
    alert("ผลบวกของ " + number1 + " กับ " + number2 + " คือ " + sum);
}
