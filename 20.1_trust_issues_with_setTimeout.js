console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
}, 5000);

console.log("End");

//Code which block the call stack for 10 seconds i.e. block the main thread for 10 seconds

let startDate = new Date().getTime();
let endDate = startDate

while (endDate < startDate + 10000) {
    endDate = endDate + new Date().getTime();
}

console.log("While Expires");
