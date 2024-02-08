const fs = require("fs");

// const data = "Welcome to NodeJS";

// fs.writeFile("./backup/sample3.txt", data, () =>
//   console.log("writing finished")
// );

// fs.readdir("./backup", (err, files) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(files);
// });

fs.readdir("./backup", (err, files) => {
  if (err) {
    console.log(err);
  }
  for (var file of files) {
    fs.unlink(`./backup/${file}`, () => {
      console.log(" deleted");
    });
  }
  console.log("All files deleted successfully");
});
