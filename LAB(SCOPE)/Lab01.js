/**บรรทัด * ให้ผลลัพธ์เป็นอะไร เพราะอะไร 
*/
let name = 'John';
function sayHi() {
 alert('Hi, ' + name);
}
name = 'Pete';
sayHi(); // *
//Hi, Pete  sayHi มีการเข้าถึงตัวแปร name
