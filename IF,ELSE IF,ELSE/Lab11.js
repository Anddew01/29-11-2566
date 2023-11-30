/**เปลี่ยน if-else ข้างล่างให้อยู่ในรูปของ Ternary
Operators 
let login = prompt('Enter username');
let message;
if (login == 'Employee') {
 message = 'Hello';
} else if (login == 'Director') {
 message = 'Greetings';
} else if (login == '') {
 message = 'No login';
} else {
 message = '';
*/
let login = prompt('Enter username');
let message = (login === 'Employee') ? 'Hello' :
              (login === 'Director') ? 'Greetings' :
              (login === '') ? 'No login' : '';
