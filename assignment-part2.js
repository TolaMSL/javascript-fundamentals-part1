// ============================================
// JAVASCRIPT FUNDAMENTALS - PART 2
// ============================================



// ============================================
// PART 1: LOOP MASTERY
// ============================================

console.log("=== MULTIPLICATION TABLE (NESTED LOOP) ===");

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("--------------------");
}



// While Loop Version
console.log("=== MULTIPLICATION TABLE (WHILE LOOP) ===");

let num = 1;

while (num <= 5) {

    let multiplier = 1;

    while (multiplier <= 10) {
        console.log(`${num} x ${multiplier} = ${num * multiplier}`);
        multiplier++;
    }

    console.log("--------------------");
    num++;
}



// ============================================
// PART 2: ARRAY METHODS PRACTICE
// ============================================

const students = [
    { name: "Tola", score: 85 },
    { name: "Ada", score: 92 },
    { name: "John", score: 58 },
    { name: "Mary", score: 74 },
    { name: "Paul", score: 66 }
];



// FILTER
console.log("=== STUDENTS WHO PASSED ===");

const passedStudents = students.filter(student => student.score >= 70);
console.log(passedStudents);



// MAP
console.log("=== STUDENT NAMES ===");

const studentNames = students.map(student => student.name);
console.log(studentNames);



// REDUCE
console.log("=== AVERAGE SCORE ===");

const totalScore = students.reduce((total, student) => total + student.score, 0);
const averageScore = totalScore / students.length;

console.log(averageScore);



// SORT
console.log("=== SORTED BY SCORE ===");

const sortedStudents = [...students].sort((a, b) => b.score - a.score);
console.log(sortedStudents);



// SOME
console.log("=== ANY STUDENT FAILED? ===");

const hasFailed = students.some(student => student.score < 60);
console.log(hasFailed);



// EVERY
console.log("=== DID EVERY STUDENT PASS? ===");

const allPassed = students.every(student => student.score >= 60);
console.log(allPassed);



// ============================================
// PART 3: FUNCTION CHALLENGE
// ============================================

console.log("=== PALINDROME CHECK ===");

function isPalindrome(str) {

    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    const reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
}



// TESTS

console.log(isPalindrome("madam"));        // true
console.log(isPalindrome("racecar"));      // true
console.log(isPalindrome("javascript"));   // false
console.log(isPalindrome("A man a plan a canal Panama")); // true