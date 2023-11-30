/**บรรทัด * และ ** ให้ผลลัพธ์เป็นอะไร เพราะอะไร */
const showModal1 = alert;
showModal1('Execute modal'); // *
// Execute modal
const showModal = alert();
showModal('Execute modal'); // **
//Error alert ไม่มี ()