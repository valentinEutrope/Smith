let jake = require("jake");
let { task, desc } = require("jake");

const execConfig = { interactive: true };

const makeInstallCmd = (path, module) => `npm i ${module} --prefix ${path}`;

desc("The default task run jake -T for list tasks");
task("default", function () {
  jake.exec("jake -T", execConfig);
});

desc("run npm install for root, client and server");
task("install", function () {
  console.log("launch npm install in root, client and server scope");
  jake.exec(
    "npm i && npm i --prefix ./src/client && npm i --prefix ./src/server",
    execConfig
  );
});

desc(
  "run npm i in client, for install module -> jake client:install module-name"
);
task("client:install", (module) => {
  console.log(module);
  jake.exec(makeInstallCmd("./src/client", module), execConfig);
});
