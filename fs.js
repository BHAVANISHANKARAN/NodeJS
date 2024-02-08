const fs = require("fs");

const data = `Dream is not that which you see while sleeping it is something that does not let you sleep.
It Is Very Easy To Defeat Someone, But It Is Very Hard To Win Someone`;

fs.writeFile("quote.txt", data, () => console.log("writing finished"));
