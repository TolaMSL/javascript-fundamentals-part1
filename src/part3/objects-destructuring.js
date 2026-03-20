// ============================================
// OBJECTS, DESTRUCTURING & SPREAD/REST
// ============================================


// ============================================
// PART 1: OBJECT FUNDAMENTALS
// ============================================

const user = {
    firstName: "Tola",
    lastName: "Sulayman",
    age: 21,
    hobbies: ["coding", "music"],

    address: {
        city: "Lagos",
        country: "Nigeria"
    },

    // Method: Get Full Name
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Method: Increment Age
    incrementAge() {
        this.age++;
        return this.age;
    },

    // Method: Add Hobby
    addHobby(hobby) {
        this.hobbies.push(hobby);
        return this.hobbies;
    },

    // Method: Get Address
    getAddress() {
        return `${this.address.city}, ${this.address.country}`;
    }
};


// TEST OBJECT METHODS
console.log("=== OBJECT METHODS ===");
console.log(user.getFullName());
console.log(user.incrementAge());
console.log(user.addHobby("football"));
console.log(user.getAddress());



// ============================================
// PART 2: DESTRUCTURING
// ============================================

console.log("=== DESTRUCTURING ===");

// Basic object destructuring
const { firstName, age } = user;
console.log(firstName, age);


// Renaming variables
const { firstName: fName, lastName: lName } = user;
console.log(fName, lName);


// Default values
const { gender = "Not specified" } = user;
console.log(gender);


// Nested destructuring
const { address: { city, country } } = user;
console.log(city, country);


// Array destructuring
const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(first, second);



// ============================================
// FUNCTION PARAMETER DESTRUCTURING
// ============================================

function printUser({ firstName, lastName, age }) {
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}

printUser(user);



// ============================================
// PART 3: SPREAD OPERATOR
// ============================================

console.log("=== SPREAD OPERATOR ===");

// Clone object
const userClone = { ...user };
console.log(userClone);


// Merge objects
const extraInfo = { profession: "Student" };

const mergedUser = { ...user, ...extraInfo };
console.log(mergedUser);


// Clone array
const hobbiesCopy = [...user.hobbies];
console.log(hobbiesCopy);



// ============================================
// PART 4: REST OPERATOR
// ============================================

console.log("=== REST OPERATOR ===");

// Object rest
const { firstName: name, ...restUser } = user;
console.log(name);
console.log(restUser);


// Function rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));