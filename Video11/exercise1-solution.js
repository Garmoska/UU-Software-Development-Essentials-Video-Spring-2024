//TASK: There is an array with Hogwarts students. Using the following conditions,
// decide what school suits better for each student.
//0 <= Gryffindor < 25
//25 <= Ravenclaw < 50
//50 <= Hufflepuff < 75
//75 <= Slytherin < 100

const students = ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy", "Neville Longbottom", "Luna Lovegood"];
const faculties = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];

for(let i=0; i < students.length; i++){
    const randomNumForHat = Math.floor(Math.random() * 100);
    let result;

    if ((0 <= randomNumForHat) && (randomNumForHat < 25)){
        result = 0;
    } else if ((25 <= randomNumForHat) && (randomNumForHat < 50)){
        result = 1;
    } else if ((50 <= randomNumForHat) && (randomNumForHat < 75)){
        result = 2;
    } else {
        result = 3;
    }

    let studentName = students[i];
    const facultyName = faculties[result];
    console.log(studentName +": faculty is " + facultyName);
}