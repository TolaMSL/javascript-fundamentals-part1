// ======================================
// PART 1: CALLBACKS
// ======================================

// Simulate async operation
function fetchUser(callback) {
  setTimeout(() => {
    const user = { name: "Tola", age: 21 };
    callback(null, user);
  }, 1000);
}

fetchUser((err, user) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("User fetched:", user);
  }
});

// ======================================
// CALLBACK HELL (Nested callbacks)
// ======================================

function getData1(cb) {
  setTimeout(() => {
    console.log("Step 1 done");
    cb();
  }, 500);
}

function getData2(cb) {
  setTimeout(() => {
    console.log("Step 2 done");
    cb();
  }, 500);
}

function getData3(cb) {
  setTimeout(() => {
    console.log("Step 3 done");
    cb();
  }, 500);
}

// Nested (bad practice example)
getData1(() => {
  getData2(() => {
    getData3(() => {
      console.log("All steps completed (callback hell)");
    });
  });
});

// ======================================
// ERROR-FIRST CALLBACK PATTERN
// ======================================

function divide(a, b, callback) {
  if (b === 0) {
    callback("Cannot divide by zero", null);
  } else {
    callback(null, a / b);
  }
}

divide(10, 2, (err, result) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Result:", result);
  }
});

// ======================================
// SIMPLE EVENT EMITTER
// ======================================

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(data));
    }
  }
}

const emitter = new EventEmitter();

emitter.on("greet", data => {
  console.log("Hello", data);
});

emitter.emit("greet", "Tola");

// ======================================
// PROMISE FUNDAMENTALS
// ======================================

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve("Promise resolved!");
    } else {
      reject("Promise rejected!");
    }
  }, 1000);
});

myPromise
  .then(result => console.log(result))
  .catch(err => console.log(err));

  // Convert callback function to promise

function fetchUserPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { name: "Tola", age: 21 };
      resolve(user);
    }, 1000);
  });
}

fetchUserPromise()
  .then(user => console.log("Promise user:", user))
  .catch(err => console.log(err));

  // ======================================
// PROMISE CHAINING
// ======================================

function step1() {
  return Promise.resolve("Step 1 done");
}

function step2() {
  return Promise.resolve("Step 2 done");
}

function step3() {
  return Promise.resolve("Step 3 done");
}

step1()
  .then(result => {
    console.log(result);
    return step2();
  })
  .then(result => {
    console.log(result);
    return step3();
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log("Error in chain:", err);
  });