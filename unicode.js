const fs = require("fs");

fs.readFile("cool.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }

  console.log(data);
});
