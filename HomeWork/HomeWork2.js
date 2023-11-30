/* LAB-10 : Refractor
เปลี่ยน if-else ข้างล่างให้อยู่ในรูปของ Ternary Operators

    let age = prompt('How old are you');
    let message;
    if (age >= 18) {
    message = 'Allowed';
    } else {
    message 
*/
let age = prompt('How old are you');
let message = (age >= 18) ? 'Allowed' : 'Not Allowed';

