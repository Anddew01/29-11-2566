/*บรรทัด *, **, *** และ **** ให้ผลลัพธ์เป็นอะไร เพราะอะไร
 */
const sender1 = 'Matt';
function sendTo(from, to) {
 console.log(`From ${from} to ${to}`);
}
sendTo(sender1, 'Sarah'); // *
sendTo(null); // **
//From Matt to Sarah
//From null to undefined
const sender = 'Matt';
function sendTo(to, from = 'CC') {
 console.log(`From ${from} to ${to}`);
}
sendTo('Max'); // ***
sendTo('Ben', 'Jay'); // ****
//From CC to Max
//From Jay to Ben