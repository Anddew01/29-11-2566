/*ให้ใช้คําสั่ง prompt เพื่อรับชื่อผู้ใช้งานจาก browser
- สร้างฟังก์ชันชื่อ sayHelloUser
- ฟังก์ชันสามารถรับชื่อผู้ใช้งานได้
- เมื่อเรียกใช้ฟังก์ชันให้ alert คําว่า “Hello” ตามด้วยชื่อผู้ใช้งาน */
let input = prompt("ใส่ข้อมูล ");
function sayHelloUser(name){
    alert("Hello" + name);
}
sayHelloUser(input);