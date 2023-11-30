/**ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอลจากจำนวนนัดที่แข่งขัน โดย
- นัดที่ชนะจะได้ 3 คะแนน
- นัดที่เÿมอจะได้ 1 คะแนน
- นัดที่แพ้ไม่ได้คะแนน
 */
const calscore = (win,draw,loss) => {
    const winpoint = win *3;
    const drawpoint = draw;
    return winpoint + drawpoint;
};
const score = calscore(5,5,5);
alert(score);