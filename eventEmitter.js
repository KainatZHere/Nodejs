import { EventEmitter } from "node:events";
import { setTimeout } from "node:timers/promises";
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once("newListener", (event, listener) => {
  if (event === "event") {
    // Insert a new listener in front
    myEmitter.on("event", () => {
      console.log("B");
    });
  }
});
myEmitter.on("event", () => {
  console.log("A");
});
myEmitter.emit("event");
// Prints:
//   B
//   A

myEmitter.on("jawi", () => {
  console.log("Jawii is a mental Girl");
});

myEmitter.emit("jawi");

// First listener
myEmitter.on("event", function firstListener() {
  console.log("Helloooo! first listener");
});
// Second listener
myEmitter.on("event", function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on("event", function thirdListener(...args) {
  const parameters = args.join(", ");
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners("event"));

// myEmitter.emit("event", 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
