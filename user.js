let username = prompt("กรอกชื่อผู้ใช้");
let password = prompt("กรอกรหัสผ่าน");

if (username === "admin" && password === "1234") {
  console.log("Hello");
  if (username === null && password === null) {
    console.log("username is required");
  }
} else {
  username != "admin" && password != "1234";
  console.log("invalid username or password");
}
