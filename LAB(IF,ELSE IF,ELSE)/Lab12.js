/**จาก Lab 8 ให้เขียนโค้ดในรูปแบบ Ternary Operators */
var score = prompt("ป้อนคะแนนของคุณ:");
score = parseFloat(score);

var grade = (score >= 80) ? 'A' :
            (score >= 70) ? 'B' :
            (score >= 60) ? 'C' :
            (score >= 50) ? 'D' : 'F';

alert("คะแนนของคุณคือ " + score + " ได้เกรด " + grade);
