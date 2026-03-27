// ===============================
// ES6+ FEATURES
// ===============================

// -------------------------------
// 1. Arrow Functions
// -------------------------------
const add = (a, b) => a + b;
const square = x => x * x;
const greet = () => "Hello";

console.log(add(2, 3));
console.log(square(4));
console.log(greet());


// -------------------------------
// 2. Map (User Cache + Phone Book)
// -------------------------------
const userCache = new Map();
userCache.set(1, { name: "Tola", age: 21 });
userCache.set(2, { name: "John", age: 25 });

console.log(userCache.get(1));

const phoneBook = new Map();
phoneBook.set("Tola", "08012345678");
phoneBook.set("John", "08123456789");

console.log(phoneBook.get("Tola"));


// -------------------------------
// 3. Word Frequency
// -------------------------------
const text = "hello world hello javascript";
const words = text.split(" ");
const freq = new Map();

words.forEach(word => {
  freq.set(word, (freq.get(word) || 0) + 1);
});

console.log(freq);


// -------------------------------
// 4. Set (Remove duplicates)
// -------------------------------
const nums = [1, 2, 2, 3, 4, 4];
const uniqueNums = [...new Set(nums)];
console.log(uniqueNums);


// -------------------------------
// 5. Set Operations
// -------------------------------
const A = new Set([1, 2, 3]);
const B = new Set([3, 4, 5]);

const union = new Set([...A, ...B]);
const intersection = new Set([...A].filter(x => B.has(x)));
const difference = new Set([...A].filter(x => !B.has(x)));

console.log(union);
console.log(intersection);
console.log(difference);


// -------------------------------
// 6. Optional Chaining + Nullish
// -------------------------------
const user = {
  name: "Tola",
  address: { city: "Lagos" }
};

console.log(user.address?.city);
console.log(user.contact?.phone ?? "No phone");