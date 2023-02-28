//const data = require("./flavour");
//console.log(data);

//const { readFileSync } = require("fs");

//const os = require("os");
//const user = os.userInfo();
//console.log(user);
//const { readFileSync } = require("fs");
/*const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`
);*/

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
