/**9. Temperature Convert
ให้เขียนฟังก์ชันแปลงอุณหภูมิจาก farenheit เป็น celsius
 */
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * (5/9);
const F = 77.0;
const C = fahrenheitToCelsius(F);

console.log(`${F} องศาฟาเรนไฮต์ เท่ากับ ${C.toFixed(2)} องศาเซลเซียส`);
