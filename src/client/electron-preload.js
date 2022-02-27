const path = require("path");
const { contextBridge, ipcRenderer } = require("electron");
const sqlite3 = require("sqlite3");

const db = new sqlite3.Database(
  path.join(__dirname, "src/db/smith.db"),
  (err) => {
    if (err) {
      console.error(err.message);
    }
  }
);

// API queries
contextBridge.exposeInMainWorld("api", {
  // Get all worlds that exists
  getWorldList: async () => {
    return new Promise((resolve, reject) => {
      const query =
        "select" +
        " w.id as id, w.name as name, w.imgURL as imgUrl, group_concat(t.tag) as tags" +
        " from world w" +
        " left join worldTag wt ON wt.worldId = w.id" +
        " left join tag t on t.id = wt.tagId" +
        " where wt.worldId is not null OR wt.worldId is null" +
        " group by w.id";
      db.all(query, (err, rows) => {
        if (err) reject(err);
        rows.forEach((row) => {
          row.tags = row.tags.split(",");
        });
        resolve(rows);
      });
    });
  },
  getWorld: async (id) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM world WHERE id = " + id;

      db.all(query, (err, rows) => {
        if (err) reject(err);
        resolve(rows[0]);
      });
    });
  },
});

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});
