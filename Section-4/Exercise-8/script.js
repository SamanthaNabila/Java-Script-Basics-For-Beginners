const marks = [80, 80, 50];

function calculateGrade(marks) {
  let sum = 0;
  for (let mark of marks) sum += mark;

  let avg = sum / marks.length;

  if (avg < 60) return "F";
  if (avg < 70) return "D";
}

console.log(calculateGrade(marks));
