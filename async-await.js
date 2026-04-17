// ==========================================
// Async/Await & Error Handling
// ==========================================


// ------------------------------------------
// Promise-based function
// ------------------------------------------
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "Tola", role: "Student" });
      } else {
        reject("Invalid user ID");
      }
    }, 1000);
  });
}



// ------------------------------------------
// Convert promise to async/await
// ------------------------------------------
async function getUser() {
  try {
    const user = await fetchUser(1);
    console.log("User fetched:", user);
  } catch (error) {
    console.log("Error:", error);
  }
}

getUser();



// ------------------------------------------
// Error handling with try/catch
// ------------------------------------------
async function getInvalidUser() {
  try {
    const user = await fetchUser(0);
    console.log(user);
  } catch (error) {
    console.log("Caught error:", error);
  }
}

getInvalidUser();



// ------------------------------------------
// Sequential execution
// ------------------------------------------
function delay(message, time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

async function runSequential() {
  console.log("Sequential start");

  const step1 = await delay("Step 1 complete", 1000);
  console.log(step1);

  const step2 = await delay("Step 2 complete", 1000);
  console.log(step2);

  const step3 = await delay("Step 3 complete", 1000);
  console.log(step3);

  console.log("Sequential end");
}

runSequential();



// ------------------------------------------
// Parallel execution
// ------------------------------------------
async function runParallel() {
  console.log("Parallel start");

  const results = await Promise.all([
    delay("Parallel 1 complete", 1000),
    delay("Parallel 2 complete", 1000),
    delay("Parallel 3 complete", 1000)
  ]);

  console.log(results);

  console.log("Parallel end");
}

runParallel();