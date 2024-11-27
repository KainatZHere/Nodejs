const path = require("path");
const fs = require("fs");

const pathName = path.join(__dirname, "files");

fs.writeFileSync(pathName + "/hello123.txt", "Hello World ");
