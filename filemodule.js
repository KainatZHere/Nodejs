const fs = require("fs");

// fs.readFile("file.txt", "utf8", (err, data) => { // callback funct give 2 parameters first error ,2-data
//   console.log(err);
//   console.log(data);
// });
// console.log("first message"); // due to asynchornous ,this line will print firstly

// readfileSync print code synchoronously (one by one)
// const a = fs.readFileSync("file.txt");
// console.log(a.toString()); //to change code in string using toString()
// console.log("finishiing code  line");

fs.writeFile("file3.txt", "this is the text of file3", () => {
  /// call when file file create
  console.log("create file");
});
