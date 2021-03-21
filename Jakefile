let jake = require("jake");
let { task, desc, namespace } = require("jake");

const execConfig = { interactive: true };

const makeNpmCmd = (path, action, moduleName) => {
  if (moduleName && moduleName !== undefined) {
    return `npm ${action} ${moduleName} --prefix ${path}`;
  }

  return `npm ${action} --prefix ${path}`;
};

desc("The default task run jake -T for list tasks");
task("default", function () {
  jake.exec("jake -T", execConfig);
});

desc("run npm install for root, client and server");
task("install", function () {
  jake.exec(
    "npm i && npm i --prefix ./src/client && npm i --prefix ./src/server",
    execConfig
  );
});

namespace("client", () => {
  const clientPath = "./src/client";

  namespace("npm", () => {
    desc(
      "run npm i in client, for install module -> jake client:npm:install[module-name]"
    );
    task("install", [], (moduleName) => {
      jake.exec(makeNpmCmd(clientPath, "i", moduleName), execConfig);
    });

    desc("uninstall module -> jake client:npm:uninstall[module-name]");
    task("uninstall", [], (moduleName) => {
      jake.exec(makeNpmCmd(clientPath, "uninstall", moduleName), execConfig);
    });
  });
});

namespace("server", () => {
  const serverPath = "./src/server";

  namespace("npm", () => {
    desc(
      "run npm i in server, for install module -> jake server:npm:install[module-name]"
    );
    task("install", [], (moduleName) => {
      jake.exec(makeNpmCmd(serverPath, "i", moduleName), execConfig);
    });

    desc("uninstall module -> jake server:npm:uninstall[module-name]");
    task("uninstall", [], (moduleName) => {
      jake.exec(makeNpmCmd(serverPath, "uninstall", moduleName), execConfig);
    });
  });
});
