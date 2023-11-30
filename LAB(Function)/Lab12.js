/**ให้สร้างฟังก์ชัน max ซึ่งจะคืนค่าพารามิเตอร์ที่มีค่ามากที่สุด
- พารามิเตอร์มีได้มากสุด 4 ตัว
- หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช้ตัวเลข ให้คืนค่าเป็น NaN
- เมื่อเรียกใช้งานฟังก์ชันต้องได้ผลลัพธ์ดังนี้
max(); // undefined
max(2); // 2
max(3, 1); // 3
max(7, 3, 9, 2); // 9
 */
function max() {
    // ตรวจสอบว่ามีพารามิเตอร์ที่ส่งมาหรือไม่
    if (arguments.length === 0) {
        return undefined;
    }

    let maxNumber = Number.NEGATIVE_INFINITY;

    // วนลูปเพื่อหาค่าที่มีค่ามากที่สุด
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            return NaN;
        }

        if (arguments[i] > maxNumber) {
            maxNumber = arguments[i];
        }
    }

    return maxNumber;
}
console.log(max());           // undefined
console.log(max(2));          // 2
console.log(max(3, 1));        // 3
console.log(max(7, 3, 9, 2));  // 9
console.log(max(5, 'a'));      // NaN
