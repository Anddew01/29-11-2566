/*ให้สร้างฟังก์ชันชื่อ login
- รับพารามิเตอร์สองตัวคือ username และ password
- ถ้า username = “admin” และ password = “P@ssw0rd” แสดงผลว่า login สําเร็จ
- แต่ถ้าไม่ใช้แสดงผลว่า login ไม่สําเร็จ */
function login(username, password) {
    if (username === "admin" && password === "P@ssw0rd") {
        alert("Login สำเร็จ");
    } else {
        alert("Login ไม่สำเร็จ");
    }
}
login("admin", "P@ssw0rd"); 
