/* ให้สร้างฟังก์ชันชื่อ findMin มีพารามิเตอร์ 2 ตัว
- ให้ผลลัพธ์เป็นค่าที่น้อยกว่าของพารามิเตอร์ทั้งสอง
*/
function findMin(number1,number2){
    return Math.min(number1 * number2);
}
let result = findMin(8,3);
alert("Min number is" + result);