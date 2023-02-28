const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("There is an error");
  }
  const first = result;
  readFile("./content/subfolder/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log("there is another error");
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log("error");
          return;
        }
        console.log(result);
      }
    );
  });
});
