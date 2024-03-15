const fs = require("node:fs");

fs.writeFile("testfile", "testdata", (err) => {
  if (err) throw err;
  console.log("all ok.");
});

fs.readFile("testfile", "utf8", (err, data) => {
  console.log(data);
});
