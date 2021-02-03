let jake = require("jake");
let { task, desc } = require("jake");

const execConfig = { interactive: true };

desc("The default task run jake -T for list tasks");
task("default", function () {
  jake.exec("jake -T", execConfig);
});

desc("run npm install for client and server");
task("install", function () {
  console.log("launch npm install in root, client and server scope");
  jake.exec(
    "npm i && npm i --prefix ./src/client && npm i --prefix ./src/server",
    execConfig
  );
});
