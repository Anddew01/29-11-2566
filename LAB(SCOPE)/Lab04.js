/**บรรทัด * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
 */
let x = 1;
function func() {
 console.log(x); // *
 let x = 2;
}
func();
// Error อ้างตัวเเปร x ก่อนประกาศตัวแปร