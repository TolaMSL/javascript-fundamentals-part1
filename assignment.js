// ==========================================
// JAVASCRIPT FUNDAMENTALS - PART 1
// ==========================================


// ==========================================
// PART 1: VARIABLES & DATA TYPES
// ==========================================

// User Profile Variables
let firstName = "Tola";
let lastName = "Samuel";
let age = 25;
let isStudent = true;
let hobbies = ["coding", "reading"];
let address = null;
let phoneNumber;

console.log("=== TYPE CHECKING ===");
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof hobbies);
console.log(typeof address);
console.log(typeof phoneNumber);


// ==========================================
// TYPE COERCION
// ==========================================

console.log("=== TYPE COERCION ===");

let result1 = "5" + 3;
console.log(result1);

let result2 = "5" - 3;
console.log(result2);

let result3 = true + 1;
console.log(result3);


// ==========================================
// TEMPLATE LITERALS
// ==========================================

let profileSummary = `My name is ${firstName} ${lastName}. I am ${age} years old. Student status: ${isStudent}.`;

console.log("=== TEMPLATE LITERAL ===");
console.log(profileSummary);


// ==========================================
// PART 2: GRADE CALCULATOR (IF/ELSE)
// ==========================================

function calculateGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid score. Enter a number between 0 and 100.";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("=== GRADE (IF/ELSE) ===");
console.log(calculateGrade(85));
console.log(calculateGrade(110));


// ==========================================
// GRADE CALCULATOR (SWITCH)
// ==========================================

function calculateGradeSwitch(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid score. Enter a number between 0 and 100.";
    }

    let category = Math.floor(score / 10);

    switch (category) {
        case 10:
        case 9:
            return "A";
        case 8:
            return "B";
        case 7:
            return "C";
        case 6:
            return "D";
        default:
            return "F";
    }
}

console.log("=== GRADE (SWITCH) ===");
console.log(calculateGradeSwitch(92));


// ==========================================
// PART 3: STRING MANIPULATION
// ==========================================

// Title Case
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log("=== TITLE CASE ===");
console.log(toTitleCase("javascript is powerful"));


// Count Vowels
function countVowels(str) {
    let vowels = "aeiou";
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log("=== COUNT VOWELS ===");
console.log(countVowels("JavaScript"));


// Reverse String
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("=== REVERSE STRING ===");
console.log(reverseString("Backend"));